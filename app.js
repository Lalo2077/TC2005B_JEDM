setTimeout(() => console.log("código asíncrono"), 4000);
setTimeout(() => console.log("ERROR: System Failure"), 8000);

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

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>ok i pull up<h1>");
    response.end();
});

server.listen(3000);