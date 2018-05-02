'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _transaction = require('../models/transaction');

var _transaction2 = _interopRequireDefault(_transaction);

var _walletFactory = require('../models/wallet-factory');

var _walletFactory2 = _interopRequireDefault(_walletFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/', function (req, res) {
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function (req, res) {
        var wallet = generateNew();
        res.json({ publicAddr: wallet.getPublicAddress(), pvtKey: wallet.getPrivateKey() });
    });

    api.get('/getBalance/:addr', function (req, res) {
        var wallet = new _walletFactory2.default().createWithPublicKey(req.params.addr);

        var balance = wallet.getBalance().then(function (balance) {
            res.json({ balance: balance });
        }).catch(function (message) {
            res.json({ balance: "error", message: message });
        });
    });

    api.post('/transaction', function (req, res) {
        var wallet = new _walletFactory2.default().createWithPrivateKey("afa66611fcd87fe2939f2dbace769512f14e7147288577c6f6735bb8aa955ce7");

        var hash = wallet.createTransaction("0xeF19E7Ec9eE90a0426c60E74aFCc504C02513E11", "0.01", 21000, 20);
    });

    return api;
};
//# sourceMappingURL=ethereum.js.map