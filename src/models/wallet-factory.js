/**
 * Created by wasimqamar on 01/05/18.
 */

import Wallet from './wallet';

export default class WalletFactory {
    createWithPrivateKey(privateKey) {
        let wallet = new Wallet();
        wallet.privateKey = privateKey;
        return wallet;
    }

    createWithPublicKey(publicAddr) {
        let wallet = new Wallet();
        wallet.publicAddress = publicAddr;

        return wallet;
    }

    generateNew() {
        let wallet = new Wallet();
        wallet.publicAddress = "new public address";
        wallet.privateKey = "new private key";

        return wallet;
    }

}
