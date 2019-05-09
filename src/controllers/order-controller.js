'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid');
const repositoryProduct = require('../repositories/product-repository');

exports.get = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.get();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send({
            message: 'Falha ao processar a requisição',
            data: error
        });
    }
};

exports.getById = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.getById(request.params.id);
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send({
            message: 'Falha ao processar a requisição',
            data: error
        });
    }
}

exports.post = async (request = new Request(), response = new Response(), next) => {
    try {
        let order = {};
        order.customer = request.body.customer;
        order.number = guid.raw().substring(0, 6);
        order.items = request.body.items;
        order.price = 0;

        const totalSum = async (items) => {
            for (const item of items) {
                let product = await repositoryProduct.getById(item.product);
                order.price += (product.price * item.quantity);
            }
        }
        await totalSum(order.items);
        let data = await repository.create(order);

        response.status(201).send({
            message: 'Pedido cadastrado',
            data: data
        });
    } catch (error) {
        response.status(500).send({
            message: 'Falha ao processar a requisição',
            data: error
        });
    }
};
