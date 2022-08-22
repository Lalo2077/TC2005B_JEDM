//setTimeout(() => console.log("código asíncrono"), 4000);
//setTimeout(() => console.log("ERROR: System Failure"), 8000);

const { Console } = require('console');
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");

const arreglo = [1,2,3,4,5,6];

function Promedio(myArray) {
    var i = 0, sum = 0, arreglo_length = myArray.length;
    while (i < arreglo_length) {
        sum = sum + myArray[i++];
}
    return sum / arreglo_length;
}
var myArray = [10,5,20,45,2,4,16,7];
var a = Promedio(myArray);
console.log(a)


//Imprime el arreglo en orden
//Porque se ejecuta con los timeouts de los valores del arreglo
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');
const { buffer } = require('stream/consumers');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if (request.url === "/hola") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>')
        response.write("<h1>Hola desde Node<h1>");
        response.end();
    }else if (request.url === "/trivia" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>')
        response.write("<h1>Pregunta a la papu nutria quién va a ganar</h1>");
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Equipos</legend>');
        response.write('<label for ="visitantes">visitantes<input type="text" name="visitante" id="visitante">');
        response.write('<br/><br/>');
        response.write('<label for ="local">local<input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Adivina">');
        response.write('</form>')
        response.end();
    }else if (request.url === "/trivia" && request.method === "POST") {

        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_visitante = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_visitante);
            const dato_local = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_local);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>')
            response.write("<h1>El resultado es: </h1>");
            if (Math.floor(Math.random() * 2) == 0) {
                response.write('<h2>' + dato_visitante + '</h2>');
            }else{
                response.write('<h2>' + dato_local + '</h2>');
            }
            
            return response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>')
        response.write("<h1>Error 404: El recurso solicitado no existe<h1>").end();
    }

});

server.listen(3000);