var express = require('express'),
    bd_professor = require('./bd_professor'),
    router = express.Router();

router.get('/professor', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var professoresRetorno = [];

    for (var i = 0; i < bd_professor.dados.length; i++) {

        var professor = bd_professor.dados[i];

        if (professor) {

            professoresRetorno.push(professor);
        }
    }

    res.json(professoresRetorno);
});

router.post('/professor', function (req, res) {
    try {
        var novoProfessor = req.body;
        var ultimoProfessor = bd_professor.dados[bd_professor.dados.length - 1];

        if (ultimoProfessor) {
            novoProfessor.id = ultimoProfessor.id + 1;
        } else {
            novoProfessor.id = 1;
        }

        bd_professor.dados.push(novoProfessor);//simula um insert no banco de dados
        res.json(novoProfessor);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/professor/:id', function (req, res) {
    var id = req.params.id;

    var posicaoProfessorParaDeletar;

    for (var i = 0; i < bd_professor.dados.length; i++) {

        var professor = bd_professor.dados[i];

        if (professor != undefined && professor.id == id) {
            posicaoProfessorParaDeletar = i;
            break;
        }
    }

    if (posicaoProfessorParaDeletar != undefined) {

        bd_professor.dados.splice(posicaoProfessorParaDeletar, 1);
        res.sendStatus(204);
    } else {

        res.sendStatus(404); //Not found
    }
});

module.exports = router;