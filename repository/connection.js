var mysql = require('mysql');

const yaml = require('js-yaml');
const fs = require('fs');
const { callbackify } = require('util');
try {
  let fileContens = fs.readFileSync('./configs/database.yaml', 'utf8');
  database = yaml.load(fileContens);
  
} catch (e) {
  console.log(e);
}

var connection = mysql.createConnection(database);

connection.connect(function(err, response) {
  if (err) {
    return err    
  }
    return response
});

module.exports = connection;