///////mysql connection //////////
const mysql = require('mysql')


////config data base////
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'first_db'
})
//connect to database//
connection.connect((err) =>{
  if (err) throw err;
  console.log("Connected with connect()!");
})

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('row[0].solution ? The solution is: ', rows[0].solution)
})

connection.end()
//////////////////////////