const Sequelize = require('sequelize');
const database = require('../config/db');

const Fabricante = database.define('fabricante', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeFabricante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoFabricante: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Fabricante;