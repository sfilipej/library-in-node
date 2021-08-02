const { response } = require('express');
const express = require('express');
const app = express();

const http = require('http');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Wolrd');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});