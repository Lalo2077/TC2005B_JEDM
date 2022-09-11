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

alert("Esta es una alerta");

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

//Entrada: un número pedido con un prompt.
//Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
//Utiliza document.write para producir la salida.
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

//Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
//Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó
//el usuario en escribir la respuesta.
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

//Parámetros: Un arreglo de números
//Regresa: La cantidad de números negativos en el arreglo, la cantidad de 
//0's y la cantidad de valores mayores a 0 en el arreglo
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

//Parámetros: Un arreglo de arreglos de números
//Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz
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


//Parámetros: Un número
//Regresa: El número con sus dígitos en orden inverso
const NumNormal = prompt("Inserta un número que quieras que se invierta: ")

function invertir(n) {
    const convertAndReverse = n.toString().split("").reverse().join("");
    return Number(convertAndReverse);
}

document.write("<h1>Ejercicio 5</h1>");
document.write("Número normal: " + NumNormal + "<br>");
document.write("Número inverso: " + invertir(NumNormal));


/*
Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas 
resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito 
en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación 
de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los 
resultados en el documento HTML.
*/

//Crear Nutria

class Nutria{
    constructor(nombre_nutria, creador, url_imagen) {
        this.nombre = nombre_nutria;
        this.creador = creador;
        this.imagen = url_imagen;
    }

    nombrar() {
        return this.nombre;
    }

    creadorNutria() {
        return this.creador;
    }
    
    crearImagen() {
        return '<img src="' + this.imagen + '" alt= "' + this.nombre + '">';
    }


};

function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
}
 
let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
let s = join(new Date, a, ' de ');


let nombre_nutria = prompt ("Nombra a tu nutria: ");

let creador = prompt ("¿Quién la creo?: ");

let url_imagen = prompt ("Dale una imagen de perfil ej. (https://cdn-raw.modrinth.com//data/wCAGNZPl/icon.jpg) ");


let nutria_nueva = new Nutria(nombre_nutria, creador, url_imagen);

document.write("<h1>Ejercicio 6</h1>");

document.write("<h2>--La montaña de la creación--</h2>");
document.write("<br>Se te pidio que le dieras nombre y le dieras una imagen de perfil");
document.write("a una nutria creada por por tí<br>");
document.write("<br>Este es el resultado:<br><br>");

document.write(nutria_nueva.crearImagen());
document.write("<h1>" + nutria_nueva.nombrar() + "</h1>");
document.write("<p>Creada por " + nutria_nueva.creadorNutria() + "</p>");
document.write("<p>el " + s + "</p><br><br>");
