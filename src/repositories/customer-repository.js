'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    return await Customer.find();
};

exports.getById = async (id) => {
    return await Customer.findOne({
        _id: id
    });
};

exports.create = async (data) => {
    let customer = new Customer();
    customer.name = data.name;
    customer.email = data.email;
    customer.password = data.password;
    return await customer.save();
};

exports.delete = async (id) => {
    await Customer.findByIdAndDelete(id);
};

