const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const http = require('http');
const port = 3000;

app.get('/', (req, res) => {
    res.send('GET');
});

app.post('/', (req, res) => {
    res.send('POST');
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