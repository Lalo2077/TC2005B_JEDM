//setTimeout(() => console.log("código asíncrono"), 4000);
//setTimeout(() => console.log("ERROR: System Failure"), 8000);

const { Console } = require('console');
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

//console.log("Hola desde node");

//const arreglo = [1,2,3,4,5,6];

/*function Promedio(myArray) {
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
*/

const http = require('http');
const { buffer } = require('stream/consumers');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if (request.url === "/casa") {
        response.write('<!DOCTYPE html>');
        response.write('<html lang="en"><head>');
        response.write('<title>Laboratorio10_A01735676</title>');
        response.write('</head><body>');
        response.write('<header>');
        response.write('<img id="logo" src="https://pbs.twimg.com/media/Fa2Z6LWXoAA8mVH?format=jpg&name=medium" width="600" heigth= "400" alt="casa">');
        response.write('<h1>La casa de las nutrias</h1>')
        response.write('</header>')
        response.write('<p> Hecho por Jose Eduardo Diaz Maldonado</p></header>');
        response.write('<section><p> Bienvenido a la casa de las nutrias</P><br>');
        response.write('<a href=http://localhost:3000/bar span style="color: blue;"> Ir al papu bar -> </a>');
        response.write('<br><br><a href=http://localhost:3000/consultorio span style="color: brown;"> Ir al consultorio -> </a>');
        response.write('</body>')
        response.end();

    }else if (request.url === "/consultorio") {
        response.write('<!DOCTYPE html>');
        response.write('<html lang="en"><head>');
        response.write('<title>Laboratorio10_A01735676</title>');
        response.write('</head><body>');
        response.write('<section><p> Este es el consultorio, pronto sera atendido</P></br>');
        response.write('<img src="https://i.ytimg.com/vi/hmSFMOgnWNI/maxresdefault.jpg" width="600" heigth= "400" alt="consultorio"><br>');
        response.write('<a href=https://www.youtube.com/watch?v=hmSFMOgnWNI> Aqui lo atenderan </a><br><br>');
        response.write('<a href=http://localhost:3000/bar span style="color: blue;"> Si no te sirvio de nada la consulta, mejor desahoga tus penas en el papu bar -> </a>');
        response.write('</body>')
        response.end();

    }else if (request.url === "/bar" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>¿Qué vas a querer el día de hoy?</h1>");
        response.write('<form action="bar" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Menu: </legend>');
        response.write('<p>Cerveza <br> Vino <br> Tequila <br> </p>')
        response.write('<label for ="Orden">Quiero<input type="text" name="Orden" id="Orden">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Ordenar">');
        response.write('</form>');
        response.write('<br><img src="https://gastronomiaycia.republica.com/wp-content/uploads/2021/12/lista_bar_2021_paradise-680x447.jpg" width="400" heigth= "200" alt="papu bar">');
        response.write('<br><br><a href=http://localhost:3000/casa span style="color: green;"> <- Volver a la casa de las nutrias </a>');
        response.end();

    }else if (request.url === "/bar" && request.method === "POST") {

        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_orden = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_orden);

            filesystem.appendFile('pedidosPapuBar.txt', dato_orden + "\n", () => console.log("Orden recibida")); //el nombre del archivo es pedidosPapuBar.txt
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>')
            if (dato_orden === "Cerveza") {
                response.write('<h1>Aquí tiene su ' + dato_orden + '</h1>');
                response.write('<img src="https://lalicorera.com/img/products/Corona-extra.png" width="200" heigth= "200" alt="cerveza">');
            }else if(dato_orden === "Vino") {
                response.write('<h1>Aquí tiene su ' + dato_orden + '</h1>');
                response.write('<img src="https://pinamora.com/wp-content/uploads/2020/08/sandra-vino-blanco.png" width="200" heigth= "200" alt="vino">');
            }else if (dato_orden === "Tequila") {
                response.write('<h1>Aquí tiene su ' + dato_orden + '</h1>');
                response.write('<img src="https://www.donjulio.com/static/images/product-blanco.png" width="200" heigth= "200" alt="tequila">');
            }else {
                response.write('<h1>No tenemos de ese hermano.</h1>');
                response.write('<img src="https://pbs.twimg.com/media/FapRZItXgAMCxed?format=jpg&name=small" width="300" heigth= "300" alt="No tenemos">');

            }
            response.write('<br><br><a href=http://localhost:3000/bar span style="color: blue;"> <- Volver al papu bar </a>');
            return response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>')
        response.write("<h1>Error 404: El recurso solicitado no existe<h1>");
        response.end();
    }
});

server.listen(3000);