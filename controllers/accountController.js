var service = require('../services/ethService');
var Transction = require('../models/transactions');


var async = require('async');

exports.accountDetails = function(req, res){
    x(req, res);
}

async function x(req, res) {
    var bal, txns;
    await service.getAccountBalance(req.body.address).then(function(result){
        bal = result.data.result;
    });
    await service.getTransactions(req.body.address).then(function(result){
        txns = result.result;
        Transction.collection.insertMany(txns, onInsert);
        function onInsert(err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log('   ', docs.length );
            }
        }
    });
    res.render('accounts', {'transaction_list': JSON.stringify(txns), 'balance' : bal} );
}


exports.transactionDetailsByHash = function(req, res){
    console.log('req.params.hash ', req.params.hash);
    Transction.find({hash: req.params.hash}).then((result) => {
        return res.send(result);
    });

}

