const express = require('express');
const app = express();
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

// List all users
// callback(err, users)
const listProducts = (callback) => {
  connection.query('SELECT * FROM products', [], (err, rows) =>{
    if (err)
      return callback(err);

    return callback(null, rows);
  });
};


//let myQuerySql = new sql.Request()

connection.end()
//////////////////////////

app.get('/', (req, res) => {
    console.log("yeah baby! ")
    res.send('An alligator approaches!');
});


app.get('/products', (req, res, next) =>{

  listProducts((err, rows) => {
    const  products = [];
    if (!err) {
      rows.forEach((row) =>{
        products.push({ id: row.id, date: row.date, description: row.description });
      });
    }

    res.render('products', { products: req.products });
  });

});



app.listen(3000, () => console.log('Gator app listening on port 3000!'));
