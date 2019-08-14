const Sequelize = require('sequelize')
const db = {}
const dbURL = 'mysql://root:12345@localhost:3306/rest-api'
const sequelize = new Sequelize(dbURL)
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tablesCreate
db.users = require('../models/user.model.js')(sequelize, Sequelize)

module.exports = db;
