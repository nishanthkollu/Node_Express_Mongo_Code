var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new Schema([{
    blockNumber: String,
    timeStamp: String,
    hash: String,
    nonce: String,
    transactionIndex: String,
    from: String,
    to: String,
    value: String,
    gas: String,
    gasPrice: String,
    isError: String,
    txreceipt_status: String,
    input: String,
    contractAddress: String,
    cumulativeGasUsed: String,
    gasUsed: String,
    confirmations: String,
    created_dt: Date,
    updated_dt: Date
}]);

var txnSchema = new Schema({
    trans: []
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;