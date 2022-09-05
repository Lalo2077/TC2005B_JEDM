const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutas_casa = require ('./routes/casa.routes.js');
app.use('/papu',rutas_casa);

const rutas_bar = require('./routes/bar.routes.js');
app.use('/papu',rutas_bar);

const rutas_familia = require('./routes/familia.routes.js');
app.use('/papu', rutas_familia);

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
