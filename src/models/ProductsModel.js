const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productsSchema = new schema({
    name: {
        type: String,
        required: true
    },
    price: String,
}, {
    timestamps: true
});

// Transformation __id to id
productsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id
    }
});

module.exports = Products = mongoose.model("products", productsSchema);