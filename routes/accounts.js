var express = require('express');
var router = express.Router();

var accountController = require('../controllers/accountController');

/* GET home page. */
//router.post('/', accountController.getTransactions);
router.post('/', accountController.accountDetails);
router.get('/', function(req, res, next) {
    res.render('accounts', { title: 'Accounts' });
  });
router.get('/transaction/:hash', accountController.transactionDetailsByHash);

module.exports = router;
