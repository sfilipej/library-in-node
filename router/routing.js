const routing = require('express').Router();

var userController = require('../controller/user')();
    routing.get('/user', userController.listar)
    routing.post('/user', userController.salvar)
    routing.put('/user', userController.alterar)
    routing.delete('/user', userController.excluir)



module.exports = routing;