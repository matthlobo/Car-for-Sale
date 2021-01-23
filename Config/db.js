const Sequelize = require('sequelize');
const sequelize = new Sequelize('carforsale', 'root', '', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;