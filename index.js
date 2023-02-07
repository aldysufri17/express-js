require('dotenv').config();
const express = require('express');
const middlewareLog = require('./src/middleware/logs');
const routes = require('./src/routes/index.js');
const app = express();
const port = process.env.PORT || 4000;

// Mengizinkan domain pada browser mengakses;
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// berfungsi untuk memparsing data JSON pada request object body.
app.use(express.json());

// Middleware
app.use(middlewareLog);

// Call Route
routes(app);

// Build server
app.listen(port, () => {
    console.log(`Server Running in port : ${port}`);
})