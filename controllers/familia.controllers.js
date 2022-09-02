const path = require('path');
const nutria = require('../models/familia.model.js');

exports.getNutrias = (request, response, next) => {

    Nutria.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('nutria', 'nutria.ejs'), {
                equipos: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    
    
};
