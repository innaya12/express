const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b3c5e8df23964d",
  password: "22871b8a",
  database: "heroku_17d0d87df1ec0ef",
});

module.exports = connection;
