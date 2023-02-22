const Sequelize = require('sequelize')

const connection = new Sequelize('perguntaserespostas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) 

module.exports = connection