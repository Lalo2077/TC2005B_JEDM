const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const rutas_trivia = require('./routes/trivia.routes.js');

app.use('/nutria',rutas_trivia);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    next();
});

app.use('/casa/nutria', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa/nutria"'); 
});

app.use('/casa', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa"'); 
});

app.use((request, response, next) => {
    console.log("El papu middleware");
    response.status(404);
    response.send('Error 404: El recurso solicitado no existe'); //Manda la respuesta
});



app.listen(3000);
