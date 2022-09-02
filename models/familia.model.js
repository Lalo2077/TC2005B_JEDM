const db = require('../util/database');

module.exports = class Nutria {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        
    }

    static fetchAll() {
        return db.execute('SELECT * FROM nutrias');
    }

}