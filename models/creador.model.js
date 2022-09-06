const db = require('../util/database');

//const nutrias = [];

module.exports = class Nutria {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        return db.execute('INSERT INTO nutrias (nombre) VALUES (?)', [this.nombre]);
    }


    static fetchAll() {
        return db.execute('SELECT * FROM nutrias');
    }
}