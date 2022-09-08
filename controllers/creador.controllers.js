const path = require('path');
const Nutria = require('../models/creador.model');

exports.getNutrias = (request, response, next) => {

    Nutria.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('creador', 'nutrias.ejs'), {
                nutrias: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    
    
};

exports.getNewNutria = (request, response, next) => {

    response.render(path.join('creador','creador.ejs'));
};

exports.postNewNutria = (request, response, next) => {

    const nutria = new Nutria(request.body.nombre);
    nutria.save()
        .then(() => {
            Nutria.fetchAll()
                .then(([rows, fieldData]) => {
                    console.log("Nutrias: ");
                    console.log(rows);
                    response.render(path.join(__dirname, '..', 'views', 'creador','nutrias.ejs'), {
                        nutrias: rows,
                    })
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};

