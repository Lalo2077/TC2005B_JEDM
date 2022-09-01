const express = require('express');
const path = require ('path');

const router = express.Router();

const clientes = [];

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/bar', (request, response, next) => {
    /*
    let html = '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>' +
    "<h1>¿Qué vas a querer el día de hoy?</h1>" +
    '<form action="bar" method="POST">' +
    '<fieldset>' +
    '<legend>Menu:</legend>' +
    '<p>Cerveza <br> Vino <br> Tequila <br> </p>' +
    '<label for ="Orden">Quiero<input type="text" name="Orden" id="Orden">' +
    '</fieldset>' +
    '<input type="submit" value="Ordenar">' +
    '</form>' +
    '<br><img src="https://gastronomiaycia.republica.com/wp-content/uploads/2021/12/lista_bar_2021_paradise-680x447.jpg" width="400" heigth= "200" alt="papu bar">' +
    '<br><br><a href=http://localhost:3000/papu/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>';
    response.send(html); 
    */
    response.sendFile(path.join(__dirname, '..', 'views', 'bar', 'bar.html'));
});

router.post('/bar', (request, response, next) => {
    console.log(request.body);
    let cliente = '';
    if (request.body.Orden === "Cerveza") {
        /*
        response.send('<h1>Aquí tiene su ' 
        + request.body.Orden + '</h1><br>' + 
        '<a href=http://localhost:3000/papu/bar span style="color: blue;"> <- Volver al papu bar </a>');
        */
        cliente = request.body.Orden;

    }else if(request.body.Orden === "Vino") {
        /*
        response.send('<h1>Aquí tiene su ' 
        + request.body.Orden + '</h1><br>' + 
        '<a href=http://localhost:3000/papu/bar span style="color: blue;"> <- Volver al papu bar </a>');
        */
        cliente = request.body.Orden;

    }else if(request.body.Orden === "Tequila") {
        /*
        response.send('<h1>Aquí tiene su ' 
        + request.body.Orden + '</h1><br>' + 
        '<a href=http://localhost:3000/papu/bar span style="color: blue;"> <- Volver al papu bar </a>');
        */
        cliente = request.body.Orden;

    }else {
        /*
        response.send('<h1>No tenemos de eso hermano</h1><br>' +
        '<a href=http://localhost:3000/papu/bar span style="color: blue;"> <- Volver al papu bar </a>');
        */
    }
    
    console.log(cliente);
    clientes.push(cliente);
    response.render(path.join('bar', 'orden.ejs'), {
        cliente: cliente,
        clientes: clientes,
    });

});

module.exports = router;
