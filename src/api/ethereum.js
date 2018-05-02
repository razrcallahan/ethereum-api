import { Router } from 'express';
import transaction from '../models/transaction';
import WalletFactory from '../models/wallet-factory';

export default ({ config, db }) => {
    let api = Router();

    api.get('/', function(req, res){
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function(req, res){
        let wallet = generateNew();
        res.json({publicAddr: wallet.getPublicAddress(), pvtKey: wallet.getPrivateKey()});
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
        let wallet = new WalletFactory().createWithPrivateKey("afa66611fcd87fe2939f2dbace769512f14e7147288577c6f6735bb8aa955ce7");

        let hash = wallet.createTransaction("0xeF19E7Ec9eE90a0426c60E74aFCc504C02513E11",
            "0.01", 21000, 20);

    });

    return api;
};

