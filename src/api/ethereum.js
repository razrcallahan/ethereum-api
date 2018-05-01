import { Router } from 'express';
import transaction from '../models/transaction';
import Wallet from '../models/wallet';

export default ({ config, db }) => {
    let api = Router();

    api.get('/', function(req, res){
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function(req, res){
        let wallet = Wallet.createWithKeys("my key", "my key");
        res.json({publicAddr: wallet.getPublicAddress(), pvtKey: wallet.getPrivateKey()});
    });

    api.get('/getBalance', function(req, res){
        res.json({ message: 'hooray! 0 ETH!' });
    });

    return api;
};

