const con = require('./connection');

module.exports = () => {

    const repository = {};
    repository.salvar = (user, callback) => {
        con.query('INSERT INTO USERS SET ?', user, function(err, response){
            if(err){
                callback(err, null);
            }
                callback(null, response)
            })    
    }

    repository.listar = (callback) => {
        con.query('SELECT * FROM USERS', function(err, rows) {
            if(err){
                callback(err);
            }
                callback(rows);
        });        
    }

    repository.filtrar = (id, callback) => {
        con.query('SELECT * FROM USERS WHERE ID = ?', [id], function(err, rows) {
           if(err){
                callback(err, null)
            }
                callback(null, rows);
        });
    }

    repository.alterar = (user, callback) => {
        con.query('UPDATE USERS SET login = ?, senha = ?, cep =?, endereco =? WHERE ID = ?', [user.login, user.senha, user.cep, user.endereco, user.id], function(err, rows) {
            if(err){
                callback(err, null)
            }
                callback(null, rows)
          });
    }

    repository.excluir = (id, callback) => {
        con.query('DELETE FROM USERS WHERE ID = ?', [id], function(err, rows) {
            if(err){
                callback(err, null)
            }
                callback(null, rows)
          });
    }

    return repository

};