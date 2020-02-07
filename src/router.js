const express = require('express')

// Create the express router object for Photos
const productRouter = express.Router();



// A GET to the root of a resource returns a list of that resource
productRouter.get('/', (req, res) => { console.log("router baby! ")});

// A POST to the root of a resource should create a new object
productRouter.post('/', (req, res) => { });

// We specify a param in our path for the GET of a specific object
productRouter.get('/:id', (req, res) => { });

// Similar to the GET on an object, to update it we can PATCH
productRouter.patch('/:id', (req, res) => { });

// Delete a specific object
productRouter.delete('/:id', (req, res) => { });

// Attach the routers for their respective paths


module.exports = productRouter ;