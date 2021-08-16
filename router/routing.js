const routing = require('express').Router();

var userController = require('../controller/user.controller')();
    routing.post('/user', userController.salvar)    
    routing.get('/users', userController.listar)
    routing.get('/user/:id', userController.filtrar)    
    routing.put('/user', userController.alterar)
    routing.delete('/user/:id', userController.excluir)



module.exports = routing;