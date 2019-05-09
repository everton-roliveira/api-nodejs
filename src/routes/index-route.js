const router = require('express').Router();

// ROTAS
const brandRoute = require('./brand-route');
const customerRoute = require('./customer-route');
const orderRoute = require('./order-route');
const productRoute = require('./product-route');

// ROTA PRINCIPAL
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Microserviço de Produtos",
        version: "0.0.1"
    });
});

// USANDO AS ROTAS
router.use('/brands', brandRoute);
router.use('/customers', customerRoute);
router.use('/orders', orderRoute);
router.use('/products', productRoute);

module.exports = router;