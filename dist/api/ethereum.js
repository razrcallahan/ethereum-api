'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _transaction = require('../models/transaction');

var _transaction2 = _interopRequireDefault(_transaction);

var _wallet = require('../models/wallet');

var _wallet2 = _interopRequireDefault(_wallet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/', function (req, res) {
        res.json({ message: 'do something!' });
    });

    api.get('/createWallet', function (req, res) {
        var wallet = _wallet2.default.createWithKeys("my key", "my key");
        res.json({ publicAddr: wallet.getPublicAddress(), pvtKey: wallet.getPrivateKey() });
    });

    api.get('/getBalance', function (req, res) {
        res.json({ message: 'hooray! 0 ETH!' });
    });

    return api;
};
//# sourceMappingURL=ethereum.js.map