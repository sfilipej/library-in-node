module.exports = () => {

    var usuarios = Array();
    const controller = {};

    controller.listar = (req, res) => {
        res.status(200).json(usuarios);
    };

    controller.filtrar = (req, res) => {
        const filtro = req.query.login;
        const userFilter = usuarios.filter(function(item, index) {
            return item.login === filtro
        })
        res.status(200).json(userFilter);
    };

    controller.salvar = (req, res) => {
        const user = req.body
        usuarios.push(user);
        console.log(usuarios);
        res.send('Adicionado com sucesso');
    };

    controller.alterar = (req, res) => {
        const user = req.body
        usuarios = usuarios.map(function(item, index){
            if(user.login === item.login){
                return user
            }
            return item;
        })
        console.log(usuarios);
        res.send('PUT');
    };

    controller.excluir = (req, res) => {
        res.send('delete');    
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