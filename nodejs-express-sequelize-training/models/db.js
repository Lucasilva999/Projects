const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', 'Lu172066!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = { Sequelize, sequelize }