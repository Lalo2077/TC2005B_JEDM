const path = require('path');

const Cliente = require('../models/orden.model');

exports.getOrden = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views','bar','bar.html'));
}

exports.postOrden = (request, response, next) => {
    console.log(request.body);
    let nombreCliente = '';
    if (request.body.Orden === "Cerveza") {
        
        nombreCliente = request.body.Orden;

    }else if (request.body.Orden === "Vino") {
        
        nombreCliente = request.body.Orden;

    }else if (request.body.Orden === "Tequila") {

        nombreCliente = request.body.Orden;

    }else {
        nombreCliente = "No disponible (" + request.body.Orden + ")";
    }
    
    console.log(Cliente);
    const unCliente = new Cliente(nombreCliente);
    unCliente.save();

    response.render(path.join('bar', 'orden.ejs'), {
        cliente: unCliente.nombre,
        clientes: Cliente.fetchAll(),
    });

};

