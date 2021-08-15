const express = require('express');
const app = express();

/* GET Work Hours - Time of reserve */
app.get('/tempo', (req, res) => {
    const total = livros.reduce(function(valorhoras, item){
        return parseInt(valorhoras) + parseInt(item.valorhoras);
    }, 0)
    res.status(200).send("Valor: " + total);
});

module.exports = app;