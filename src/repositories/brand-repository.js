'use strict';
const mongoose = require('mongoose');
const Brand = mongoose.model('Brand');

exports.get = async () => {
    return await Brand.find({
        active: true
    }, 'description slug');
};

exports.getById = async (id) => {
    return await Brand.findOne({
        _id: id,
        active: true
    });
};

exports.create = async (data) => {
    let brand = new Brand(data);
    return await brand.save();
};

exports.update = async (id, data) => {
    await Brand.findByIdAndUpdate(id, {
        $set: {
            description: data.description,
            slug: data.slug,
            active: data.active
        }
    });
};

exports.delete = async (id) => {
    await Brand.findByIdAndDelete(id);
};
