const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    response.send('¡Hola mundo!'); //Manda la respuesta
    next();
});

app.use((request, respones, next) => {
    console.log("El papu middleware")
});

app.listen(3000);
