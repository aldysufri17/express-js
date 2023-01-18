const router = require('express').Router();
const product = require('../controllers/ProductController.js');

// Get all Products
router.get('/products',product.getAllProducts);

// Store Products
router.post('/products',product.addProducts);

// Update Products
router.put('/products/:id',product.updateProducts);

// Get Detail Products
router.get('/products/:id',product.getDetailProducts);

// Delete Products
router.delete('/products/:id',product.deleteProducts);

module.exports = router;