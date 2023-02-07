const models = require('../models');
const Product = models.product;

module.exports = {
    // Get All Products
    getAllProducts(req, res) {

        // Call item from Models
        // refrensi https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries
        Product.findAll()
            .then((items) => {
                res.json({
                    message: 'Get products successfuly.',
                    data: items,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: err.message || "Get products failed.",
                    data: null,
                });
            });
    },

    // Get Detail Products
    getDetailProducts(req, res) {

        // Get parameter id
        const id = req.params.id;

        // Call item from Models
        // Refrensi https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findbypk
        Product.findByPk(id)
            .then((items) => {
                res.json({
                    success: true,
                    message: 'Get detail products successfuly.',
                    data: items,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: err.message || "Get detail products failed.",
                    data: null,
                })
            })
    },

    // Delete Products
    deleteProducts(req, res) {
        // Get parameter id
        const id = req.params.id;

        // Delete item from Models
        // refrensi https://sequelize.org/docs/v6/core-concepts/paranoid/#deleting
        Product.destroy({
                where: {
                    id: id
                },
            })
            .then(() => {
                res.json({
                    success: true,
                    message: `Delete products by id ${id} successfuly`
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: err.message || "Get detail products failed.",
                })
            })
    },

    // Add New Products
    addProducts(req, res) {
        // Get Item from body
        const body = req.body;
        let dataBody = {
            name: body.name,
            price: body.price
        }

        if (!body.name || !body.price || body.name == null || body.price == null) {
            return res.status(400).json({
                message: 'missing required fields',
                data: null,
            })
        }

        // Insert item from Models
        // Refrensi https://sequelize.org/docs/v6/core-concepts/model-instances/#a-very-useful-shortcut-the-create-method
        Product.create(dataBody)
            .then((items) => {
                res.json({
                    success: true,
                    message: 'Product create success.',
                    data: dataBody
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Product create failed.'
                })
            })
    },

    // Update Products
    updateProducts(req, res) {
        // Get Item from body
        const body = req.body;
        let dataBody = {
            name: body.name,
            price: body.price
        }

        if (!body.name || !body.price || body.name == null || body.price == null) {
            return res.status(400).json({
                message: 'missing required fields',
                data: null,
            })
        }

        // Get parameter id
        const id = req.params.id

        // Update item from Models
        // refrensi https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
        Product.update(dataBody, {
                where: {
                    id: id
                }
            })
            .then((items) => {
                res.json({
                    success: true,
                    message: 'Products update success',
                    data: {
                        id: id,
                        ...body
                    }
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Products update failed.'
                })
            })
    },
}