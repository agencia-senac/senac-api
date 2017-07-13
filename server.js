var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    prof = require('./professor/professores.routes')
    app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', prof);

app.listen(3000, function () {
    console.log('senac-api listening on port 3000!');
});
