setTimeout(() => console.log("código asíncrono"), 4000);
setTimeout(() => console.log("ERROR: System Failure"), 8000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");

const arreglo = [5000,60,90,100,10,20,10000,0,120,2000,340,1000,50,20000];

//Imprime el arreglo en orden
//Porque se ejecuta con los timeouts de los valores del arreglo
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}