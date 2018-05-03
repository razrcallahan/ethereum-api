import { Router } from 'express';
import transaction from '../models/transaction';
import WalletFactory from '../models/wallet-factory';

export default ({ config, db }) => {
    let api = Router();

    api.get('/', function(req, res){
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function(req, res){
        let wallet = new WalletFactory()
            .generateNew()
            .then((wallet) => {
                res.json({publicAddress: wallet.publicAddress, privateKey: wallet.privateKey});
            });
    });

    api.get('/getBalance/:addr', function(req, res){
        let wallet = new WalletFactory().createWithPublicKey(req.params.addr);

        let balance = wallet.getBalance()
            .then(function(balance){
                res.json({ balance: balance });
            })
            .catch(function(message){
                res.json({ balance: "error", message: message})
            });
    });

    api.post('/transaction', function(req, res){
        //todo: validate request parameters.


        new WalletFactory()
            .createWithPrivateKey(req.body.privateKey)
            .then((wallet) => {
                let txPromise = wallet.createTransaction(
                    req.body.destination,
                    req.body.amount,
                    21000,
                    20
                );

                txPromise.then((txDetails) => {
                    console.log("Transaction details: ");
                    console.log(txDetails);
                    res.json(txDetails);
                });
            });
    });

    return api;
};

