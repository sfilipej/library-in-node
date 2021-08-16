const con = require('./connection');

module.exports = () => {

    const repository = {};
    repository.salvar = (user) => {
        con.query('INSERT INTO USERS SET ?', user, function(err, res){
            if(err){
                console.log(err);
                return;
            }
            /*console.log(`Inseriu... ${res.insertId}`); */
            con.end();
            })    
    }

    repository.listar = (callback) => {
        con.query('SELECT * FROM USERS', function(err, rows) {
            if(err){
                console.log(err);
                return;
            }
            /* console.log(rows); */
            return callback(rows);
        });        
    }

    repository.filtrar = (id) => {
        con.query('SELECT * FROM USERS WHERE ID = ?',[id], function(err, rows) {
            if(err){
                console.log(err);
                return;
            }
            /* console.log(rows); */
            return rows;
        });        
    }


    return repository

};