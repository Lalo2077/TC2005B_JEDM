const path = require('path');

exports.logout = (request, response, next) => {

    request.session.destroy(() => {
        response.redirect('/papu/bar');
    });
};