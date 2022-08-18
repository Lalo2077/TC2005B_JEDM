const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");