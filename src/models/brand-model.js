'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    slug: {
        type: String,
        required: [true, 'campo obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, { collection: 'brand'});

module.exports = mongoose.model('Brand', schema);