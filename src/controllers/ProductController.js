const db = require('../configs/db');

module.exports = {
    // Get All Products
    getAllProducts(req, res) {
        db.query("SELECT * FROM products", function (err, rows) {
            if (err) throw err;
            res.json({
                'success': true,
                'message': 'Get products successfuly',
                'data': rows
            })
        })
    },

    // Get Detail Products
    getDetailProducts(req, res) {
        const id = req.params.id
        db.query(`SELECT * FROM products WHERE id = ${id}`, function (err, rows) {
            try {
                res.json({
                    'success': true,
                    'message': 'Get products successfuly',
                    'data': rows
                })
            } catch (error) {
                res.json({
                    'success': false,
                    'message': 'Get products failed',
                    'data': null
                })
            }
        })
    },

    // Delete Products
    deleteProducts(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM products WHERE id = ${id}`, function (err, rows) {
            try {
                res.json({
                    'success': true,
                    'message': 'Delete products successfuly',
                })
            } catch (error) {
                res.json({
                    'success': false,
                    'message': 'Delete products failed',
                })
            }
        })
    },

    // Get Detail Products
    addProducts(req, res) {
        const body = req.body;

        if(!body.name || !body.price || body.name == null || body.price == null ){
            return res.status(400).json({
                message: 'Anda mengirimkan data yang salah',
                data: null,
            })
        }

        let dataBody = {
            name : body.name,
            price : body.price
        }
        db.query(`INSERT INTO products SET ?;`,[dataBody], () => {
            try {
                res.json({
                    'success': true,
                    'message': 'Create products successfuly',
                    'data': body
                })
            } catch (error) {
                res.json({
                    'success': false,
                    'message': 'Create products failed',
                    'data': null
                })
            }
        })
    },

    // Get Detail Products
    updateProducts(req, res) {
        const body = req.body;

        if(!body.name || !body.price || body.name == null || body.price == null ){
            return res.status(400).json({
                message: 'Anda mengirimkan data yang salah',
                data: null,
            })
        }

        const dataBody = {
            name : body.name,
            price : body.price
        }

        const id = req.params.id

        console.log(body);
        console.log(id);

        db.query(`INSERT INTO products SET ? WHERE id = ?;`,[dataBody,id], () => {
            try {
                res.json({
                    'success': true,
                    'message': 'Update products successfuly',
                    'data': {
                        'id' : id,
                        ...body
                    }
                })
            } catch (error) {
                res.json({
                    'success': false,
                    'message': 'Update products failed',
                    'data': null
                })
            }
        })
    },
}