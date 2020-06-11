const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b7e2437887xxxa",
  password: "0200xxx6",
  database: "heroku_7643ec736354xxx",

});

module.exports = connection;
