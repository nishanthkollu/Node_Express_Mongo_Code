const axios = require('axios');

const baseUrl = 'https://api.etherscan.io/';
const apikey = 'XUP6F94RRPIQH45BAS8YYUCHHJ6YBRVTRM';
//const address = '0x33645fA49FE258E0349723DBAd2A548a14ADC088';


exports.getAccountBalance = function(address){
    const acctBalUrl = baseUrl +'api?module=account&action=balance&address=' + address + '&tag=latest&apikey=' + apikey;
    return new Promise((resolve, reject) => {
        axios.get(acctBalUrl).then(function(response) {
            //console.log(response.data);
            resolve(response)
            }).catch(function(error) {
                console.log(error);
                reject(error)
            });
    });
}

exports.getTransactions = function(address) {   
    const tranListUrl = baseUrl + 'api?module=account&action=txlist&address=' + address 
    + '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=' + apikey;
    return new Promise((resolve, reject) => {
        axios.get(tranListUrl).then(function(response) {
            //console.log(response.data);
            resolve(response.data);
        }).catch(function(error) {
            console.log(error);
            reject(error);
        });
    });
    
}




