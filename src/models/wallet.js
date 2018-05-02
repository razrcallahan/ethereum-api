/**
 * Created by wasimqamar on 01/05/18.
 */
import EthereumTx from 'ethereumjs-tx';

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
        let address = this.getPublicAddress();
        return new Promise(function(resolve, reject){

            let balance = web3.eth.getBalance(address);

            balance.then(function(value) {

                resolve(web3.utils.fromWei(value, 'ether'));

            }).catch(function(message){

                reject(message);
            });
        });
    }

    createTransaction(destinationAddr, amount, gasPrice, gasLimit) {
        let sendTransaction = function(nonce) {
            let details = {
                "to": destinationAddr,
                "value": web3.utils.toHex( web3.utils.toBN(web3.utils.toWei(amount, 'ether')).toString() ),
                "gas": gasPrice,
                "gasPrice": gasLimit * 1000000000, // converts the gwei price to wei
                "nonce": nonce,
                "chainId": 4 // EIP 155 chainId - mainnet: 1, rinkeby: 4
            }

            const transaction = new EthereumTx(details);
            var privateKey = new Buffer('afa66611fcd87fe2939f2dbace769512f14e7147288577c6f6735bb8aa955ce7', 'hex')
            transaction.sign(privateKey);

            let serializedTx = transaction.serialize();
            web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            .on('transactionHash', function(hash){
                    console.log(hash);
                });
        }

        let nonce = web3.eth.getTransactionCount("0x77A83849D1Ae0d56410fA102d0C26Cc06c559620")
        nonce.then(function(value) {
            sendTransaction(value);
        }).catch(function(message){
            console.log(message);
        });
    }
}
