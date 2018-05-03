/**
 * Created by wasimqamar on 01/05/18.
 */
import EthereumTx from 'ethereumjs-tx';

export default class Wallet {
    constructor(publicAddr, privateKey) {
        this._publicAddress = publicAddr;
        this._privateKey = privateKey;

    }

    get publicAddress() {
        return this._publicAddress;
    }

    set publicAddress(addr) {
        this._publicAddress = addr;
    }

    get privateKey() {
        return this._privateKey;
    }

    set privateKey(key) {
        this._privateKey = key;
    }

    getBalance = () => {
        let address = this.publicAddress;
        return new Promise(function(resolve, reject){

            let balance = web3.eth.getBalance(address);

            balance.then(function(value) {

                resolve(web3.utils.fromWei(value, 'ether'));

            }).catch(function(message){

                reject(message);
            });
        });
    }

    createTransaction = (destinationAddr, amount, gasPrice, gasLimit) => {
        var that = this;
        console.log("Starting transaction .. ");
        return that.getTransactionCount().then((nonce) => {
            console.log("Nonce .. " + nonce);
            let details = {
                "to": destinationAddr,
                "value": web3.utils.toHex( web3.utils.toBN(web3.utils.toWei(amount, 'ether')).toString() ),
                "gas": gasPrice,
                "gasPrice": gasLimit * 1000000000, // converts the gwei price to wei
                "nonce": nonce,
                "chainId": 4 // EIP 155 chainId - mainnet: 1, rinkeby: 4
            };

            var privateKey = new Buffer(that.privateKey, 'hex');
            const transaction = new EthereumTx(details);

            transaction.sign(privateKey);

            let serializedTx = transaction.serialize();


            console.log("Sending transaction to blockchain .. " + details);
            return web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))

        }).catch((message) => {

            console.log(message);
        });
    }

    getTransactionCount = () => {
        return web3.eth.getTransactionCount(this.publicAddress);
    }

    getAccountByPrivateKey = () => {
        console.log("finding public key from private key ... ");
        var that = this;
        return new Promise((resolve, reject) => {
            let account = web3.eth.accounts.privateKeyToAccount('0x' + that.privateKey);
            if( account ) {
                console.log("public key found  ... " + account.address);
                resolve((account));
            }
            else
                reject(() => {
                    throw new Error("Unable to find the account for private key");
                });
        });
    }


}
