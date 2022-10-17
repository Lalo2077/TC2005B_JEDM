const db = require('../util/database');

//const nutrias = [];

module.exports = class Nutria {

    constructor(un_nombre, una_imagen) {
        this.nombre = un_nombre;
        this.imagen = una_imagen;

    }

    save() {
        return db.execute('INSERT INTO nutrias (nombre, imagen) VALUES (?,?)', [this.nombre, this.imagen]);
    }

    static fetchOne(una_nutria) {
        return db.execute('SELECT * FROM nutrias WHERE id = ?', [una_nutria]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM nutrias');
    }
}