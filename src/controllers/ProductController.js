const models = require('../models/ProductsModel');

module.exports = {
    // Get All Products
    getAllProducts(req, res) {
        // Get All item from Models
        // referensi : https://mongoosejs.com/docs/api.html#model_Model-find
        models.find((err, data) => {
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Get products failed',
                'data': err
            });

            return res.json({
                'success': true,
                'message': 'Get products successfuly',
                'data': data
            });
        })
    },

    // Get Detail Products
    getDetailProducts(req, res) {

        // Get parameter id
        const id = req.params.id;

        // Call item from Models
        // Refrensi https://mongoosejs.com/docs/api/model.html#model_Model-findById
        models.findId(id, (err, items) => {
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Find products failed',
                'data': err
            })

            return res.json({
                'success': true,
                'message': 'Find products success',
                'data': items
            })
        })

    },

    // Delete Products
    deleteProducts(req, res) {
        // Get parameter id
        const id = req.params.id;

        // Delete item from Models
        // Refrensi https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndRemove
        models.findByIdAndRemove(id, (err, items) => {
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Delete products failed',
                'data': err
            })

            res.json({
                'success': true,
                'message': `Delete products by id ${id} successfuly`,
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
        // Refrensi https://mongoosejs.com/docs/models.html
        models.create(dataBody, function (err, items) {
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Create products failed',
                'data': null
            })

            return res.json({
                'success': true,
                'message': 'Create products successfuly',
                'data': {
                    id: items.insertId,
                    ...body,
                }
            })
        });
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
        // Referensi https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate
        models.findByIdAndUpdate(id, dataBody, (err, items) => {
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Update products failed',
                'data': null
            })

            return res.json({
                'success': true,
                'message': 'Update products successfuly',
                'data': {
                    id: id,
                    ...body,
                }
            })
        })
    },

    // Delete all Tutorials from the database.
    deleteAllProducts(req, res) {
        models.deleteMany((err, items)=>{
            if (err) return res.status(500).json({
                'success': false,
                'message': 'Delete All products successfuly failed',
                'data': err
            });

            return res.json({
                'success': true,
                'message': `${items.deletedCount}, Delete All products successfuly`,
                'data': data
            });
        })
    }
}