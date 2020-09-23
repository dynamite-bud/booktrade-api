const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        author: {
            type: String,
            required: false,
            maxlength: 200
        },
        publisher : {
            type: String,
            required: false,
            maxlength: 200
        },
        pubYear: {
            type: Number,
            required: false,
        },
        isbn: {
            type: Number,
            required: false,
        },
        condition:{
            type: String,
            required: false,
            default: 'used',
            maxlength: 200
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        quantity: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: {
            required: false,
            type: Boolean
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
