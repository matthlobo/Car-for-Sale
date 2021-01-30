const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    var fabricantes = require('../Routes/fabricantes');
    var carros = require('../Routes/carros');

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    // Usando rotas
    app.use('/fabricantes', fabricantes);
    app.use('/carros', carros);

    consign()
        .include('Controllers')
        .into(app)

    return app
}