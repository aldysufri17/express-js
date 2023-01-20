// referensi https://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");
require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL;

module.exports = db;