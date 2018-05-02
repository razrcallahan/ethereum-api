'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by wasimqamar on 01/05/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ethereumjsTx = require('ethereumjs-tx');

var _ethereumjsTx2 = _interopRequireDefault(_ethereumjsTx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wallet = function () {
    function Wallet(publicAddr, privateKey) {
        _classCallCheck(this, Wallet);

        this.publicAddress = publicAddr;
        this.privateKey = privateKey;
    }

    _createClass(Wallet, [{
        key: 'getPublicAddress',
        value: function getPublicAddress() {
            return this.publicAddress;
        }
    }, {
        key: 'getPrivateKey',
        value: function getPrivateKey() {
            return this.privateKey;
        }
    }, {
        key: 'getBalance',
        value: function getBalance() {
            var address = this.getPublicAddress();
            return new Promise(function (resolve, reject) {

                var balance = web3.eth.getBalance(address);

                balance.then(function (value) {

                    resolve(web3.utils.fromWei(value, 'ether'));
                }).catch(function (message) {

                    reject(message);
                });
            });
        }
    }, {
        key: 'createTransaction',
        value: function createTransaction(destinationAddr, amount, gasPrice, gasLimit) {
            var sendTransaction = function sendTransaction(nonce) {
                var details = {
                    "to": destinationAddr,
                    "value": web3.utils.toHex(web3.utils.toBN(web3.utils.toWei(amount, 'ether')).toString()),
                    "gas": gasPrice,
                    "gasPrice": gasLimit * 1000000000, // converts the gwei price to wei
                    "nonce": nonce,
                    "chainId": 4 // EIP 155 chainId - mainnet: 1, rinkeby: 4
                };

                var transaction = new _ethereumjsTx2.default(details);
                var privateKey = new Buffer('afa66611fcd87fe2939f2dbace769512f14e7147288577c6f6735bb8aa955ce7', 'hex');
                transaction.sign(privateKey);

                var serializedTx = transaction.serialize();
                web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', function (hash) {
                    console.log(hash);
                });
            };

            var nonce = web3.eth.getTransactionCount("0x77A83849D1Ae0d56410fA102d0C26Cc06c559620");
            nonce.then(function (value) {
                sendTransaction(value);
            }).catch(function (message) {
                console.log(message);
            });
        }
    }]);

    return Wallet;
}();

exports.default = Wallet;
//# sourceMappingURL=wallet.js.map