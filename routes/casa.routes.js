const express = require('express');

const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});

router.get('/casa', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<title>Laboratorio11_A01735676</title>' +
    '</head><body>' +
    '<header>' +
    '<img id="logo" src="https://pbs.twimg.com/media/Fa2Z6LWXoAA8mVH?format=jpg&name=medium" width="600" heigth= "400" alt="casa">' +
    '<h1>La casa de las nutrias</h1>' +
    '<form action="bar" method="POST">' +
    '<fieldset>' +
    '<legend>Menu:</legend>' +
    '<p>Cerveza <br> Vino <br> Tequila <br> </p>' +
    '<label for ="Orden">Quiero<input type="text" name="Orden" id="Orden">' +
    '</fieldset>' +
    '<input type="submit" value="Ordenar">' +
    '</form>' +
    '<br><img src="https://gastronomiaycia.republica.com/wp-content/uploads/2021/12/lista_bar_2021_paradise-680x447.jpg" width="400" heigth= "200" alt="papu bar">' +
    '<br><br><a href=http://localhost:3000/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>';
    response.send(html); 
});