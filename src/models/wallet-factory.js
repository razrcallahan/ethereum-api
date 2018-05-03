/**
 * Created by wasimqamar on 01/05/18.
 */

import Wallet from './wallet';

export default class WalletFactory {

    createWithPrivateKey = (privateKey) => {
        return new Promise((resolve, reject) => {
            let wallet = new Wallet();

            wallet.privateKey = privateKey;

            wallet.getAccountByPrivateKey().then((account) => {

                wallet.publicAddress = account.address;
                resolve(wallet);

            });

        });
    };

    createWithPublicKey = (publicAddr) => {
        let wallet = new Wallet();
        wallet.publicAddress = publicAddr;

        return wallet;
    };

    generateNew = () => {
        return new Promise((resolve, reject) => {
            let ethWallet = web3.eth.accounts.create();

            let wallet = new Wallet();
            wallet.publicAddress = ethWallet.address;
            wallet.privateKey = ethWallet.privateKey;

            resolve(wallet);

        });
    };

}
