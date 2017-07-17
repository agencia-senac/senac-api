var express = require('express'),
    bd_professor = require('./bd_professor'),
    router = express.Router();

router.get('/professor', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(bd_professor.dados);
});

router.post('/professor', function (req, res) {
    try {
        var novoProfessor = req.body;
        var ultimoProfessor = bd_professor.dados[bd_professor.dados.length - 1];

        novoProfessor.id = ultimoProfessor.id + 1;

        bd_professor.dados.push(novoProfessor);//simula um insert no banco de dados
        res.json(novoProfessor);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/professor', function(req, res) {
    //TODO
    res.sendStatus(501);
});

module.exports = router;