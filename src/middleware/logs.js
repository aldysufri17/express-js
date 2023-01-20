const db = require('../configs/db');

module.exports = middleware = (req, res, next) => {
    console.log('Welcome products Rest, Middleware Checked Request Path : ', req.path);
    db.mongoose.connect(db.url)
        .then(() => {
            console.log("Database Connected!");
        })
        .catch(err => {
            console.log("Database not Connected!", err);
            process.exit();
        });
    next();
}