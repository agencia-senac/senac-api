var express = require('express'),
    bd_cursos = require('./bd_curso'),
    router = express.Router();

router.get('/curso', function (req, res) { 
    res.sendStatus(501);
});