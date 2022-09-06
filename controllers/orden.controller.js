const path = require('path');

const Cliente = require('../models/orden.model');

const Nutria = require('../models/creador.model');

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

exports.getConsultorio = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views','Consultorio.ejs'));
}

exports.getPreguntas = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views','Preguntas.ejs'));
}

exports.getCreador = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views','creador','creador.ejs'));
}

exports.postCreador = (request, response, next) => {
    console.log(request.body);
    let nombreNutrias = '';
    
    nombreNutrias = request.body.nombre;

    console.log(Nutria);
    const unaNutria = new Nutria(nombreNutrias);
    unaNutria.save();

    response.render(path.join('creador', 'nutrias.ejs'), {
        nutria: unaNutria.nombre,
        nutrias: Nutria.fetchAll(),
    });

};