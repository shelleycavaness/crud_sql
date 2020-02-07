
// List all users
// callback(err, users)
/*
const listProducts = (callback) => {
    connection.query('SELECT * FROM products', [], (err, rows) =>{
      if (err)
        return callback(err);
  
      return callback(null, rows);
    });
  };


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
*/  