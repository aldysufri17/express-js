module.exports = middleware = (req,res,next) => {
    console.log('Middleware Checked Request Path : ', req.path);
    next();
}