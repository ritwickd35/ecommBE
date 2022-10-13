const mongoose = require('mongoose')

const {Schema, model} = mongoose

const ProductsSchema = new Schema({
    // product_id: mongoose.Types.ObjectId,
    Name: String,
    price: Number,
    description: String,
    sales: Number
})

const Product = model('Product', ProductsSchema)
module.exports = Product