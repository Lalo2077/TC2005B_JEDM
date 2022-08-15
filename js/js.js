// variables, constantes, consola (log, info, warn, error)

//Forma moderna de declarar variables
//El alcance es a nivel de bloque {}
let streamer_españa = "Ibai";

//Forma clásica de declarar variables
//El alcance es a nivel de función 
var streamer_noruega = "Rubius";

const streamer_colombia = "JuanSGuarnizo";

console.log(streamer_españa);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//La siguiente línea produce un error porque i murió en el 
//bloque anterior
//console.log(i);

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

console.info("Esto es información");

console.warn("bro?");

console.error("Error");

console.assert(streamer_españa === streamer_noruega);

console.log(streamer_colombia);

// alert, prompt, confirm

alert("WTF AMIGO");

const nombre = prompt("¿Cómo te llamas");

console.log("Hola " + nombre);

const is_hungry = confirm( "¿Tienes hambre?");

// Funciones tradicionales

function comer() {
    const comida = "no se"
    console.log(comida);
    return true;
}

const comida = comer;

if(is_hungry) {
    alert("Come :D");
    comida();
} else {
    alert("._.");
}

// Funciones modernas 

const anon = () => console.log("anónimo");

anon();


//arreglos

const menu = ["Papa al horno", "Arrachera","Tamales"];

console.log(menu);

for(let p in menu) {
    console.log(p);
}

for(let p of menu) {
    console.log(p);
}

menu[10] = "Pasta";
console.log(menu);

menu.length = 2;
console.log(menu);



//html dinámico con eventos 
const boton = document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML =
        '<img src="media/nutria.jpeg" alt="Juan nos cuida">';
}

let Numero = prompt("Inserta un número: ")

function tabla_cuadrados(){
    let resultado = "<table>";
    for (let i = 1; i <= Numero; i++){
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return (resultado);
}

document.write("Ejercicio 1");
document.write(tabla_cuadrados());

