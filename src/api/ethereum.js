import { Router } from 'express';
import transaction from '../models/transaction';
import factory, {generateNew} from '../models/wallet-factory';
import Accounts from 'web3-eth-accounts';

export default ({ config, db }) => {
    let api = Router();

    api.get('/', function(req, res){
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function(req, res){
        web3.eth.accounts.create();
        let wallet = generateNew();
        res.json({publicAddr: wallet.getPublicAddress(), pvtKey: wallet.getPrivateKey()});
    });

    api.get('/getBalance', function(req, res){
        res.json({ message: 'hooray! 0 ETH!' });
    });

    return api;
};

