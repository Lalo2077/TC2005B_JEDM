const path = require('path');
const Usuario = require ('../models/usuario.model.js')

exports.getNuevo = (request, response, next) => {
    response.render(path.join('usuarios', 'nuevo.ejs'));
}

exports.postNuevo = (request, response, next) => {

    const usuario = new Usuario(request.body.username, request.body.password, request.body.nombre);
    usuario.save()
        .then(() => {
            response.status(303).redirect('/papu/bar');
        })
        .catch(err => {
            console.log(err);
            response.status(303).redirect('new');
        });
};

exports.logout = (request, response, next) => {

    request.session.destroy(() => {
        response.redirect('/papu/bar');
    });
};