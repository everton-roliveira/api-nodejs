const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Conecta ao banco
const uri = 'mongodb://localhost:27017/db_store_example';
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
});

// Carrega os models
const model = require('./models/index-model');

// Carrega Rotas
const indexRoute = require('./routes/index-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoute);

module.exports = app;