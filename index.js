'use strict'
const api = require('./app/index')
const chalk = require('chalk')
const msqlDB = require('./app/config/mysql-db.config')
const port = process.env.PORT || 3000
// Conexion con MySQL
msqlDB.sequelize.sync({force: true}).then(() => {
    console.log('tables creates');
  })
// Inicio del server
api.listen(port, () => console.log(`${chalk.green('[rest-api]')} server listening on port ${port}`))
