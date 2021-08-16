const express = require('express');
const app = express();
const port = 3000;
const routing = require('./router/routing');

app.use(express.json());
app.use(routing);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});