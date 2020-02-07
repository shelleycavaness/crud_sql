const express = require('express');
const app = express();
const bodyParser = require('body-parser');
///const productRouter = express.Router();
// const productRouter = require('./router');


/*
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

productRouter.route('/products').get((req, res)=>{
  const query = {}
  if(req.query){
    req.query
  }
  console.log('router testing')
  res.send('qwertyuiop')
})
*/

app.get('/', (req, res) => {
//    console.log("yeah baby! ")
    res.send('An alligator approaches!');
});


//app.use('./products', productRouter);

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
