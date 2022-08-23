const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    next();
});

app.get('/trivia', (request, response, next) => {
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

app.post('/trivia', (request, response, next) => {
    console.log(request.body);
    if (Math.floor(Math.random() * 2) == 0) {
        response.send('<h2>' + request.body.visitante + '</h2>');
    }else{
        response.send('<h2>' + request.body.local + '</h2>');
    }
});

app.use('/casa/nutria', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa/nutria"'); 
});

app.use('/casa', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa"'); 
});

app.use((request, response, next) => {
    console.log("El papu middleware");
    response.send('¡Hola mundo!'); //Manda la respuesta
});



app.listen(3000);
