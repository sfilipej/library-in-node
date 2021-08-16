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

    repository.filtrar = (id, callback) => {
        con.query('SELECT * FROM USERS WHERE ID = ?', [id], function(err, rows) {
           if(err)
                callback(err, null);
            else
                callback(null, rows);
        });
    }

    repository.alterar = (user) => {
        console.log(user);
        con.query('UPDATE USERS SET login = ?, senha = ?, cep =? WHERE ID = ?', [user.login, user.senha, user.cep, user.id], function(err, rows) {
            if(err){
                console.log(err);
                return;
            }
            /* console.log(`${rows.affectedRows}`); */
          });
    }

    repository.excluir = (id) => {
        /* console.log(`DELETE FROM USERS WHERE ID = ${id}`); */
        con.query('DELETE FROM USERS WHERE ID = ?', [id], function(err, rows) {
            if(err){
                /* console.log(err); */
                return;
            }
            /* console.log(`deleted ${results.affectedRows}`); */
          });
    }

    return repository

};