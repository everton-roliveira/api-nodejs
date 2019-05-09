'use strict';
const repository = require('../repositories/product-repository');

exports.get = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.get();
        response.status(200).send(data)
    } catch (error) {
        response.status(500).send(errorCatch(error))
    }
};

exports.getById = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.getById(request.params.id);
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(errorCatch(error));
    }
};

exports.post = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.create(request.body);
        response.status(201).send({
            message: 'Inserido com sucesso!',
            data: data
        })
    } catch (error) {
        response.status(500).send(errorCatch(error));
    }
};

exports.put = async (request = new Request(), response = new Response(), next) => {
    try {
        await repository.update(request.body);
        let product = await repository.getById(request.body._id);
        response.status(201).send({
            message: 'Atualizado com sucesso!',
            data: product
        })
    } catch (error) {
        response.status(500).send(errorCatch(error));
    }
};

exports.delete = async (request = new Request(), response = new Response(), next) => {
    try {
        await repository.de-lete(request.body._id);
        response.status(201).send({
            message: 'Deletado com sucesso!'
        });
    } catch (error) {
        response.status(500).send(errorCatch(error));
    }
};

function errorCatch(error) {
    return {
        message: 'Falha ao processar a requisição',
        data: error
    };
}