const express = require('express');

const router = express.Router();


router.get('/bar', (request, response, next) => {
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
    '<br><br><a href=http://localhost:3000/info span style="color: green;"> <- Volver a la casa de las nutrias </a>';
    response.send(html); 
});

router.post('/bar', (request, response, next) => {
    console.log(request.body);
    if (request.body.Orden === "Cerveza") {
        response.send('<h1>Aquí tiene su ' 
        + request.body.Orden + '</h1>');

    }else if(request.body.Orden === "Vino") {
        response.send('<h1>Aquí tiene su ' 
        + request.body.Orden + '</h1>');
    }
});

module.exports = router;
