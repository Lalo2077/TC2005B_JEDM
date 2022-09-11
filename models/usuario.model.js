const db = require('../util/database');

module.exports = class Usuario {

    constructor(un_username, un_password, un_nombre) {
        this.username = un_username;
        this.pasword = un_password;
        this.nombre = un_nombre;
    }

    save() {
        return db.execute('INSERT INTO usuarios (username, password, nombre) VALUES (?, ?, ?)', [this.username, this.pasword, this.nombre]);
    }


    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }
}