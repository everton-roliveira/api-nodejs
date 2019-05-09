'use strict';
const repository = require('../repositories/brand-repository');

exports.get = async (request, response, next) => {
    try {
        let data = await repository.get();
        response.status(200).send(data);
    } catch (e) {
        response.status(500).send(errorCatch(e));
    }
};

exports.getById = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.getById(request.params.id)
        response.status(200).send(data);
    } catch (e) {
        response.status(500).send(errorCatch(e));
    }
};

exports.post = async (request = new Request(), response = new Response(), next) => {
    try {
        let data = await repository.create(request.body);
        response.status(201).send({
            message: 'Inserido com sucesso!',
            data: data
        });

    } catch (e) {
        response.status(500).send(errorCatch(e));
    };
};

exports.put = async (request = new Request(), response = new Response(), next) => {
    try {
        await repository.update(request.params.id, request.body);
        let dataAtualizada = await repository.getById(request.params.id);
        response.status(201).send({
            message: 'Atualizado com sucesso!',
            data: dataAtualizada
        });
    } catch (e) {
        response.status(500).send(errorCatch(e));
    }

};

exports.delete = async (request = new Request, response = new Response, next) => {
    try {
        await repository.delete(request.params.id);
        response.status(201).send({
            message: 'Deletado com sucesso!'
        })
    } catch (e) {
        response.status(500).send(errorCatch(e));
    }
};

function errorCatch(error) {
    return {
        message: 'Falha ao processar a requisição',
        data: error
    };
}