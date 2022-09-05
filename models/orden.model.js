const clientes = [];

module.exports = class Cliente {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        clientes.push(this);
    }


    static fetchAll() {
        return clientes;
    }
}