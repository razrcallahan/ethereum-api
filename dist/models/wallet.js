"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by wasimqamar on 01/05/18.
 */
var Wallet = function () {
    function Wallet() {
        _classCallCheck(this, Wallet);
    }

    _createClass(Wallet, [{
        key: "getPublicAddress",
        value: function getPublicAddress() {
            return this.publicAddress;
        }
    }, {
        key: "getPrivateKey",
        value: function getPrivateKey() {
            return this.privateKey;
        }
    }, {
        key: "getBalance",
        value: function getBalance() {}
    }, {
        key: "createTransaction",
        value: function createTransaction() {}
    }], [{
        key: "createWithKeys",
        value: function createWithKeys(publicAddr, privateKey) {
            //todo create existing wallet
            var wallet = new Wallet();
            wallet.publicAddress = publicAddr;
            wallet.privateKey = privateKey;

            return wallet;
        }
    }, {
        key: "generateNew",
        value: function generateNew() {
            var wallet = new Wallet();
            wallet.publicAddress = "new public address";
            wallet.privateKey = "new private key";

            return wallet;
        }
    }]);

    return Wallet;
}();

exports.default = Wallet;
//# sourceMappingURL=wallet.js.map