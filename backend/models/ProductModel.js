const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductModel = mongoose.Schema({
    sku: {
        type: Number,
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    additionalData: {
        type: String,
    },
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    image4: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        enum: ['t-shirt','hoodie'],
        default: 't-shirt',
    },
    postDate: {
        type: Date,
        default: Date.now,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    availability: {
        type: String,
        enum: ['available','un-available'],
        default: 'available',
    }
});

ProductModel.plugin(AutoIncrement, {inc_field: 'sku'});

const Article = mongoose.model('Product', ProductModel);
module.exports = Article;
