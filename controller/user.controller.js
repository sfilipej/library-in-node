const request = require("request");
const { changeUser } = require("../repository/connection");
var userRep = require('../repository/user.repository')();

module.exports = () => {
    
    const controller = {};

    controller.salvar = (req, res) => {
        const user = req.body;
        var cep = user.cep;
        request(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
            user.endereco = body;
            userRep.salvar(user);
            res.send('Adicionado com sucesso');
        });
    };

    controller.listar = (req, res) => {
        userRep.listar((users) => {
            res.status(200).json(users);       
        })             
    };

    controller.filtrar = (req, res) => {
        const id = req.params.id;
        userRep.filtrar(id, function(err, rows) {
            if(err){
                console.log(err);
            }
            res.status(200).json(rows);
        });        
    };

    controller.alterar = (req, res) => {
        user = req.body;
        var cep = user.cep;
        request(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
            user.endereco = body;
            userRep.alterar(user);
            res.status(200).json(`User ${user.id}  alterado!`);
        });
    };

    controller.excluir = (req, res) => {
        const id = req.params.id;
        userRep.excluir(id);
        res.send(`delete ${id}`);    
    };

    return controller
    
}

/* Mapping, create a new array based on another */
/* app.get('/map', (req, res) => {
    const login = usuarios.map(function(item, index){
        return item.login;
    })
    res.status(200).json(login);
}); */