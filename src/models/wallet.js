/**
 * Created by wasimqamar on 01/05/18.
 */
export default class Wallet {
    constructor(publicAddr, privateKey) {
        this.publicAddress = publicAddr;
        this.privateKey = privateKey;
    }

    getPublicAddress() {
        return this.publicAddress;
    }

    getPrivateKey() {
        return this.privateKey;
    }

    getBalance() {
        return this.balance;
    }

    createTransaction(desinationAddr) {

    }
}
