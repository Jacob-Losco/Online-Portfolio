const mysqlConnection = require('./connection.js');

let getIndexData = new Promise(function(resolve, reject) {
  mysqlConnection.query("Select about from Online_Portfolio.homeTable", (err, res) =>{
    let finalArray = [];
    for(const line of res){
      finalArray.push(line.about);
    }
    resolve(finalArray);
  });
});

module.exports = getIndexData;