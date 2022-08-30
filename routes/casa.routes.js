const express = require('express');

const router = express.Router();


router.get('/casa', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<title>Laboratorio11_A01735676</title>' +
    '</head><body>' +
    '<header>' +
    '<img id="logo" src="https://pbs.twimg.com/media/Fa2Z6LWXoAA8mVH?format=jpg&name=medium" width="600" heigth= "400" alt="casa">' +
    '<h1>La casa de las nutrias</h1>' +
    '<p> Hecho por Jose Eduardo Diaz Maldonado</p></header>' +
    '<a href=http://localhost:3000/papu/bar span style="color: blue;"> Ir al papu bar -> </a>' +
    '<br><br><a href=http://localhost:3000/papu/consultorio span style="color: brown;"> Ir al consultorio -> </a><br>' +
    '<br><img src="https://c.tenor.com/mzRXpX4RnZsAAAAd/nutria-dedsafio.gif" width="250" heigth= "150" alt="papunutria"><br>' +
    '<a href=http://localhost:3000/papu/preguntas span style="color: red;"> Preguntas a responder -> </a>' +
    '<footer>' +
    '<hr/>' +
    '<p>A01735676<br>© Tecnológico de Monterrey</p>'
    '</footer>' 

    '</body>';

    response.send(html); 
});


router.get('/consultorio', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<title>Laboratorio11_A01735676</title>' +
    '</head><body>' +
    '<header>' +
    '<img id="logo" src="https://i.pinimg.com/550x/98/77/50/9877502e6d57754d6baea3fad018d454.jpg" width="350" heigth= "150" alt="consultorio">' +
    '<h1>El consultorio</h1>' +
    '<img src="https://i.ytimg.com/vi/hmSFMOgnWNI/maxresdefault.jpg" width="450" heigth= "150" alt="La nutria terapeuta"><br>' +
    '<a href=https://www.youtube.com/watch?v=hmSFMOgnWNI> Aqui lo atenderan </a><br><br>' +
    '<a href=http://localhost:3000/papu/bar span style="color: blue;"> Si no te sirvio de nada la consulta, mejor desahoga tus penas en el papu bar -> </a>' +
    '<br><br><a href=http://localhost:3000/papu/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>' +
    '</body>';
    response.send(html); 
});

router.get('/Preguntas', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<title>Laboratorio11_A01735676</title>' +
    '</head><body>' +
    '<header>' +
    '<h1>Preguntas a responder</h1>' +
    '<p>Describe el arcivo package.json: </p>' +
    '<h3>name</h3>' +
    '<h3>version</h3>' +
    '<h3>description</h3>' +
    '<h3>main</h3>' +
    '<h3>scripts</h3>' +
    '<h3>repository</h3>' +
    '<h3>keywords</h3>' +
    '<h3>Authors</h3>' +
    '<h3>license</h3>' +
    '<h3>bugs</h3' +
    '<h3>homepage</h3>' +
    '<h3>devDependencies</h3>' +
    '<h3>dependencies</h3>' +
    '<br><br><a href=http://localhost:3000/papu/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>' +
    '</body>';
    response.send(html); 
});

module.exports = router;