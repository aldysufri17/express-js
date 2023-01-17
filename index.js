const express = require('express');
const routeProducts = require('./src/routes/ProductsRoute.js');
const middlewareLog = require('./src/middleware/logs');
const app = express();
const port = 4000;


app.use(express.json());
// Middleware
app.use(middlewareLog);

app.use('/', routeProducts);

app.listen(port,()=>{
    console.log(`Server Running in port : ${port}`);
})