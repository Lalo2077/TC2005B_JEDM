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


/////////////////////////////////////////////////////////////////////////
//html dinámico con eventos 
const boton = document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML =
        '<img src="media/nutria.jpeg" height = 500 width = 500 alt="Juan nos cuida">';
}

let Numero = prompt("Inserta un número: ")


function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= Numero; i++){
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i * i + "</td>" + "<td>" + i*i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return (resultado);
}

document.write("<h1>Ejercicio 1</h1>");
document.write(tabla_cuadrados());

var suma = 0;

function aleatorio() {
    var num1 = parseInt(Math.random() * 100);
    var num2 = parseInt(Math.random() * 100);

    var suma = num1 + num2;
    
    var temp_inicio = Date.now();
    var respuesta = parseInt(prompt("¿Cual es la suma de " + num1 + " y " + num2 + "?"));
    var temp_final = Date.now();

    var timer = (temp_final - temp_inicio) / 1000;

    if (respuesta == suma) {
        document.write("Correcto");
        document.write("<br>");
        document.write("Tardaste: " + + timer + " segundos");
    }else{
        document.write("Falso");
        document.write("<br>");
        document.write("Tardaste: " + + timer + " segundos");
    }
    return;
}

document.write("<h1>Ejercicio 2</h1>");

aleatorio();

function contador() {
    const numeros = [10,23,0,-4,6,-7,2,-10,0];
    var negativos = 0;
    var positivos = 0;
    var ceros = 0;

    for(let i = 0; i <numeros.length; i++) {
        if (numeros[i]==0) {
            ceros++;
        }else if (numeros[i]<0) {
            negativos++;
        }else {
            positivos++;
        }
    }
    document.write("[" + numeros + "]");
    document.write("<br/>Hay: " + positivos + " positivos, " + negativos + " negativos, " + ceros + " ceros");
    return null;
}

document.write("<h1>Ejercicio 3</h1>");
contador();

function promedio() {
    let arreglos = [[10,10,10,10,], [20,20], [30,30,30]];

    let sum = 0;
    let prom = 0;
    let result = [];

    for(let i = 0; i < arreglos.length;i++) {
        sum = 0;
        prom = 0;
        for(let j = 0; j < arreglos[i].length; j++) {
            sum += arreglos[i][j];
        }
        prom = sum / arreglos[i].length;
        result.push(prom);
    }
    document.write("Arreglo de arreglos de números<br/>")
    document.write(arreglos + "<br>" + "["+ result + "]");
}

document.write("<h1>Ejercicio 4</h1>");
promedio();


const NumNormal = prompt("Inserta un número que quieras que se invierta: ")

function invertir(n) {
    const convertAndReverse = n.toString().split("").reverse().join("");
    return Number(convertAndReverse);
}

document.write("<h1>Ejercicio 5</h1>");
document.write("Número normal: " + NumNormal + "<br>");
document.write("Número inverso: " + invertir(NumNormal));

document.write("<h1>Ejercicio 6</h1>");

