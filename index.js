const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const http = require('http');

const usuarios = Array();

app.get('/', (req, res) => {
    res.status(200).json(usuarios);
});

app.post('/', (req, res) => {
    const user = req.body
    console.log("Login: " + user.login);
    console.log("Senha: " + user.senha);

    usuarios.push(user);

    console.log(usuarios);
    res.send('Adicionado com sucesso');
});

app.put('/', (req, res) => {
    res.send('PUT');
});

app.delete('/', (req, res) => {
    res.send('DELETE');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});