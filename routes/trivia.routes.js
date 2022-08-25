const express = require('express');

const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});

router.get('/trivia', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>' +
    "<h1>Pregunta a la papu nutria quién va a ganar</h1>" +
    '<form action="trivia" method="POST">' +
    '<fieldset>' +
    '<legend>Equipos</legend>' +
    '<label for ="visitantes">visitantes<input type="text" name="visitante" id="visitante">' +
    '<br/><br/>' +
    '<label for ="local">local<input type="text" name="local" id="local">' +
    '</fieldset>' +
    '<input type="submit" value="Adivina">' +
    '</form>';
    response.send(html); 
});

router.post('/trivia', (request, response, next) => {
    console.log(request.body);
    if (Math.floor(Math.random() * 2) == 0) {
        response.send('<h2>El ganador será: ' 
        + request.body.visitante + '</h2>');
    }else{
        response.send('<h2>El ganador será: ' + request.body.local + '</h2>');
    }
});

module.exports = router;
