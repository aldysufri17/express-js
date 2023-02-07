const express = require('express');

// Controller
const ProductController = require('../controllers/ProductController');

// exstend router express
const product = express.Router();

module.exports = routes = (app) => {

    // Get all Products
    product.get('/', ProductController.getAllProducts);

    // Store Products
    product.post('/', ProductController.addProducts);

    // Update Products
    product.put('/:id', ProductController.updateProducts);

    // Get Detail Products
    product.get('/:id', ProductController.getDetailProducts);

    // Delete Products
    product.delete('/:id', ProductController.deleteProducts);


    // Alias
    app.use('/api/products', product)
}