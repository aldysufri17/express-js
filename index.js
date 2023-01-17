const express = require('express');
require('dotenv').config();
const routeProducts = require('./src/routes/ProductsRoute.js');
const middlewareLog = require('./src/middleware/logs');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// Middleware
app.use(middlewareLog);

app.use('/', routeProducts);

app.listen(port,()=>{
    console.log(`Server Running in port : ${port}`);
})