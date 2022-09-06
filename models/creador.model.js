const nutrias = [];

module.exports = class Nutria {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        nutrias.push(this);
    }


    static fetchAll() {
        return nutrias;
    }
}