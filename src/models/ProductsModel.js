const con = require('../configs/db');

// Model Get All 
const findAll = (result) => {
    let sql = 'SELECT * FROM products';

    con.query(sql, (err, rows) => {

        console.log("error: ", err);
        if (err) result(err, null);

        console.log(rows);
        result(null, rows);
    });
};

// Model Find By Id
const findId = (id, result) => {
    let sql = 'SELECT * FROM products WHERE id = ?';

    con.query(sql, [id], (err, rows) => {

        console.log("error: ", err);
        if (err) result(err, null);

        console.log(rows);
        result(null, rows);
    })
};

// Model Delete
const deleteById = (id, result) => {
    let sql = 'DELETE FROM products WHERE id = ?';

    con.query(sql, [id], (err, rows) => {
        console.log("error: ", err);
        if (err) result(err, null);

        console.log(rows);
        result(null, rows);
    })
}

// Model Insert
const insertItem = (dataBody, result) => {
    let sql = 'INSERT products SET ?';

    con.query(sql, [dataBody], (err, rows) => {
        console.log("error: ", err);
        if (err) result(err, null);

        console.log(rows);
        result(null, rows);
    })
}

// Model Insert
const updateItem = (dataBody, id, result) => {
    let sql = 'UPDATE products SET ? WHERE id = ?';

    con.query(sql, [dataBody, id], (err, rows) => {
        console.log("error: ", err);
        if (err) result(err, null);

        console.log(rows);
        result(null, rows);
    })
}

module.exports = {
    findAll,
    findId,
    deleteById,
    insertItem,
    updateItem
};