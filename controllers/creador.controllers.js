const path = require('path');
const Nutria = require('../models/creador.model');

exports.getNutrias = (request, response, next) => {

    Nutria.fetchAll()
        .then(([rows, fieldData]) => {
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
    response.render(path.join('creador','creador.ejs'), {
        nutrias: "",
    });
};

exports.postNewNutria = (request, response, next) => {

    const nutria = new Nutria(request.body.nombre, '/uploads/' + request.file.filename);
    nutria.save()
        .then(() => {
            response.redirect('/papu');
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};

exports.getEditNutria = (request, response, next) => {

    Nutria.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
            response.render(path.join('creador','creador.ejs'), {
                nutrias: rows[0],
                
            });
        } else {
            console.log("no existe esta nutria");
            response.render('error.ejs', {
            });
        }
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs');
    });

};

exports.postEditNutria = (request, response, next) => {

    Nutria.fetchOne(request.body.id)
        .then(([rows, fieldData]) => {
            rows[0].nombre = request.body.nombre;
            Nutria.saveEdit(rows[0])
                .then(() => {
                    response.redirect('/papu/');
                })
                .catch(err => {
                    console.log(err);
                    response.render('error.ejs', {
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                    });
                });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
    
};
