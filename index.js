const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var fabricantes = require('./Routes/fabricantes');
var carros = require('./Routes/carros');

// (async () => {
//     const database = require('./Model/Fabricante');
 
//     try {
//         const resultado = await database.sync();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// })();


// Usando BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usando rotas
app.use('/fabricantes', fabricantes);
app.use('/carros', carros);

// Criando rota diretamente no index
app.get('/', (req, res) => {
    res.send("Bem vindo ao Car for Sale!")
})



app.listen(3000, () => {
    console.log("Servidor online na porta 3000!");
});




