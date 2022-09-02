const express = require('express');
const path = require ('path');

const router = express.Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

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
    /*
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
    */
    console.log(path.join(__dirname, '..', 'views', 'consultorio.html'));
    response.sendFile(path.join(__dirname, '..', 'views', 'consultorio.html'));
});

router.get('/Preguntas', (request, response, next) => {
    /*
    let html = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<title>Laboratorio11_A01735676</title>' +
    '</head><body>' +
    '<header>' +
    '<h1>Preguntas a responder</h1>' +
    '<p>Describe el arcivo package.json: </p>' +
    '<h3>name</h3>' +
    '<p>Es el nombre principal del paquete.</p>' +
    '<p>El nombre debe ser menor o por lo menos iguala 214 caracteres.</p>' +
    '<h3>version</h3>' +
    '<p>Es la version que usa el paquete.</p>' +
    '<h3>description</h3>' +
    'Es de ayuda tener una descripción para que las personas puedan' +
    'conocer el paquete.</p>' +
    '<h3>main</h3>' +
    '<p>Es un modulo ID, el cual es la principal entrada al programa</p>' +
    '<h3>scripts</h3>' +
    '<p>Es un diccionario que contiene comandos de scripts que se usan' +
    'en diferentes instancias del paquete.</p>' +
    '<h3>repository</h3>' +
    '<p>Especifica el lugar en donde el código se encuenta, hay diferentes' +
    'herramientas como Github o Bitbucket que se pueden usar para guardar' +
    'repositorios de manera remota.</p>'
    '<h3>keywords</h3>' + 
    '<p>es un arreglo de strings, que ayuda a las personas a encontrar tu paquete' +
    'como esta listado en npm search.</p>' +
    '<h3>Authors</h3>' +
    '<h3>license</h3>' +
    '<p>La licencia específica a las personas que es lo que tienen permitido usar y'+
    'las restricciones elegidas.</p>' +
    '<h3>bugs</h3' +
    '<p>Es un url a la sección de problemas del projecto donde se pueden guiar para' +
    'resolver problemas, tambien se puede colocar un email donde se pueda reportar errores.</p>' +
    '<h3>homepage</h3>' +
    '<p>Se coloca el url de la pagina principal del proyecto.</p>' +
    '<h3>devDependencies</h3>' +
    '<p>Sirve tener esto para que puedan descargar y usar los modulos que se usan en el proyecto' +
    'en sus programas.</p>' +
    '<h3>dependencies</h3>' +
    '<p>Son las versiones de los modulos que se usan en el proyecto, las cuales pueden ser usadas' +
    'por otras personas en sus programas' + 
    '<br><br><a href=http://localhost:3000/papu/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>' +
    '</body>';
    response.send(html); 
    */
    
    response.render(path.join('Preguntas.ejs'));
});



module.exports = router;