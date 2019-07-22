var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "zombimigz",
  password: "mike8321"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});