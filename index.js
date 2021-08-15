const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

var userController = require('./controller/user');
var booksControler = require('./controller/user');
var reservationController = require('./controller/user');

app.use(userController);
app.use(booksControler);
app.use(reservationController);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});