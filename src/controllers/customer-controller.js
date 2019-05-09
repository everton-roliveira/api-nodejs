'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.get = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.get();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(errorCatch(error));
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
    let constract = new ValidationContract();
    constract.isEmail(request.body.email, "e-mail inválido");

    if (!constract.isValid()) {
        response.status(400).send(constract.errors()).end();
        return;
    }
    try {
        let data = await repository.create(request.body);
        response.status(201).send({
            message: 'Inserido com sucesso!',
            data: data
        })
    } catch (e) {
        response.status(500).send(errorCatch(e));
    }
};

exports.delete = async (request = new Request(), response = new Response(), next) => {
    try {
        await repository.delete(request.body._id);
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