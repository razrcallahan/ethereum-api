/**
 * Created by wasimqamar on 01/05/18.
 */
class Wallet {
    constructor(publicAddr, privateKey) {
        this.publicAddress = publicAddr;
        this.privateKey = privateKey;

        connect();
    }

    connect() {
        //connect to ethereum network
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

    createTransaction() {

    }
}

export default Wallet;
