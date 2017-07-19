var express = require('express'),
    bd_aluno = require('./bd_aluno'),
    router = express.Router();

router.get('/aluno', function (req, res) {
    res.sendStatus(501);
 });