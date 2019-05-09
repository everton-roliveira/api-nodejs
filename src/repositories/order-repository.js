'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    return await Order.find({}).populate('customer');
};

exports.getById = async (id) => {
    return await Order.find({ _id: id }).populate('customer');
};

exports.create = async (data) => {
    let order = new Order(data);
    return await order.save();
};

