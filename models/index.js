const Sequelize = require('sequelize')
const sequelize = require('../config')

let friend = require('./friends.js')(sequelize, Sequelize)

module.exports = {
    friend
}