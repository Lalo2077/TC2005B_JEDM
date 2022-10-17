const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { json } = require("express");


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Date.now() + '-' +file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('archivo')); 

app.use(cookieParser());

app.use(session({
    secret: '{sdsdaddadffasfafafafasfd}',
    resave: false,
    saveUninitialized: false,
}))

const rutas_bar = require('./routes/bar.routes.js');
app.use('/papu',rutas_bar);

const rutas_familia = require('./routes/familia.routes.js');
app.use('/papu', rutas_familia);

const rutas_user = require('./routes/user.routes.js');
app.use('/user', rutas_user);

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
