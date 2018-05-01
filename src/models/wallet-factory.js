/**
 * Created by wasimqamar on 01/05/18.
 */

class WalletFactory {
    static createWithPrivateKey(publicAddr, privateKey) {
        let wallet = new Wallet();
        wallet.publicAddress = publicAddr;
        wallet.privateKey = privateKey;

        return wallet;
    }

    static createWithPublicKey(publicAddr) {
        let wallet = new Wallet();
        wallet.publicAddress = publicAddr;

        return wallet;
    }

    static generateNew() {
        let wallet = new Wallet();
        wallet.publicAddress = "new public address";
        wallet.privateKey = "new private key";

        return wallet;
    }
}
