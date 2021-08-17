const express = require('express');
const yaml = require('js-yaml');
const fs = require('fs');
const app = express();

const routing = require('./router/routing');

try {
    let fileContens = fs.readFileSync('./configs/dev.yaml', 'utf8');
    data = yaml.load(fileContens);
    
} catch (e) {
    console.log(e);
}
const port = data['port']

app.use(express.json());
app.use(routing);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});