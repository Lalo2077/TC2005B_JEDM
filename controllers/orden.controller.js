const path = require('path');

const Cliente = require('../models/orden.model');

//const Nutria = require('../models/creador.model');

exports.getOrden = (request, response, next) => {

    let cookie = 0;

    try {
        cookie = request.get('Cookie').split('=')[1];
    } catch (e) {
        console.log(e);
    }

    console.log(cookie);

    response.render(path.join(__dirname, '..', 'views','bar','bar.ejs'), {
        clicks: cookie,
    });
};

exports.postOrden = (request, response, next) => {
    
    let clicks = request.get('Cookie') ? request.get('Cookie').split('=')[1] : 0;
    clicks++;
    response.setHeader('Set-Cookie', 'numero_clicks=' + clicks + "; HttpOnly=true'");
    
    
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
        Clicks: clicks,
    });

};

exports.getConsultorio = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views','Consultorio.ejs'));
}

exports.getPreguntas = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views','Preguntas.ejs'));
}


/*
exports.getCreador = (request, response, next) => {
    //response.render(path.join(__dirname, '..', 'views','creador','creador.ejs'));

    Nutria.fetchAll()
        .then(([rows, fieldData]) => {
            console.log("Nutrias: ");
            console.log(rows);
            response.render(path.join(__dirname, '..', 'views','creador','creador.ejs'), {
                nutrias: rows,
            });
        })

        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        })
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

*/