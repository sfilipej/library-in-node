const express = require('express');
const app = express();

var usuarios = Array();

/* GET ALL */
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

/* GET FILTER */
app.get('/usuario', (req, res) => {
    const filtro = req.query.login;
    const userFilter = usuarios.filter(function(item, index) {
        return item.login === filtro
    })
    res.status(200).json(userFilter);
});

/* Mapping, create a new array based on another */
app.get('/map', (req, res) => {
    const login = usuarios.map(function(item, index){
        return item.login;
    })
    res.status(200).json(login);
});

/* Creating new user */
app.post('/usuario', (req, res) => {
    const user = req.body
    usuarios.push(user);
    console.log(usuarios);
    res.send('Adicionado com sucesso');
});

/* Updating user */
app.put('/usuario', (req, res) => {
    const user = req.body
    usuarios = usuarios.map(function(item, index){
        if(user.login === item.login){
            return user
        }
        return item;
    })
    console.log(usuarios);
    res.send('PUT');
});

app.delete('/usuario', (req, res) => {
    res.send('delete');    
});

module.exports = app;