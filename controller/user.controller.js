const request = require("request");
var userRep = require('../repository/user.repository')();

module.exports = () => {
    
    const controller = {};

    controller.salvar = (req, res) => {
        const user = req.body;
   /*      var cep = user.cep;
        request(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
            user.endereco = JSON.parse(body);
            usuarios.push(user);
            res.send('Adicionado com sucesso');
        }); */
        userRep.salvar(user);
        res.send('Adicionado com sucesso');
    };

    controller.listar = (req, res) => {
        userRep.listar((users) => {
            res.status(200).json(users);       
        })             
    };

    controller.filtrar = (req, res) => {
        const id = req.params.id;
        userRep.filtrar(id);
        const r = res.body
        console.log(r);
        res.status(200).json("");     
    };

    controller.alterar = (req, res) => {
      /*   const user = req.body
        usuarios = usuarios.map(function(item, index){
            if(user.login === item.login){
                return user
            }
            return item;
        })
        console.log(usuarios);
        res.send('PUT'); */
    };

    controller.excluir = (req, res) => {
        /* res.send('delete');     */
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