const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutas_bar = require('./routes/trivia.routes.js');

app.use('/papu',rutas_bar);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    next();
});

app.use('/papu/welcome', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa/nutria"'); 
});

app.use('/casa', (request, response, next) => {
    response.send('¡Hola! desde la ruta "/casa"'); 
});

app.get('/info', (request, response, next) => {
    console.log(path.join(__dirname));
    console.log(path.join(__dirname, '..'));
    console.log(path.join(__dirname, '..', 'views', 'index.html'));
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((request, response, next) => {
    console.log("El papu middleware");
    response.status(404);
    response.send('Error 404: El recurso solicitado no existe'); //Manda la respuesta
});



app.listen(3000);
