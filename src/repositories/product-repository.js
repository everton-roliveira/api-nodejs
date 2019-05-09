'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    return await Product.find({ active: true }, 'title slug price');
};

exports.getById = async (id) => {
    return await Product.findOne({ _id: id, active: true });
};

exports.create = async (data) => {
    let product = new Product(buildProduct(data));
    return await product.save();
};

exports.update = async (data) => {
    await Product.findByIdAndUpdate(data._id, {
        $set: buildProduct(data)
    });
};

exports.delete = async (id) => {
    await Product.findByIdAndDelete(id);
};

function buildProduct(data) {
    let product = new Product();
    return product = {
        title: data.title,
        slug: data.slug,
        description: data.description,
        price: data.price,
        tags: data.tags,
        image: data.image,
        active: data.active
    };
}