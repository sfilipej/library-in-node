const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const http = require('http');

var usuarios = Array();
var livros = Array();

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

/* GET Work Hours - Time of reserve */
app.get('/tempo', (req, res) => {
    const total = livros.reduce(function(valorhoras, item){
        return parseInt(valorhoras) + parseInt(item.valorhoras);
    }, 0)
    res.status(200).send("Valor: " + total);
});

/* Mapping, create a new array based on another */
app.get('/map', (req, res) => {
    const login = usuarios.map(function(item, index){
        return item.login;
    })
    res.status(200).json(login);
});

/* Creating new user */
app.post('/', (req, res) => {
    const user = req.body
    usuarios.push(user);
    console.log(usuarios);
    res.send('Adicionado com sucesso');
});

/* Updating user */
app.put('/', (req, res) => {
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

app.delete('/', (req, res) => {
    res.send('delete');    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});