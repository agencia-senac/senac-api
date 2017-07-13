var express = require('express'),
    bd_professor = require('./bd_professor'),
    router = express.Router();

router.get('/professor', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(bd_professor.dados);
});

router.post('/professor', function (req, res) {
    try {
        bd_professor.dados.push(req.body);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;