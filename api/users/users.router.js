'use strict'
const express = require('express')
const api = express.Router()
const userSaveController = require('./user-save.controller')
const userGetController = require('./user-get.controller')
const userUpdateController = require('./user-update.controller')
const userDeleteController = require('./user-delete.controller')
/* const userSeederController = require('./user-seeder.controller')
const userLoginController = require('./user-login.controller')
 */

api.get('/user-get',userGetController)
api.post('/user-save',userSaveController)
api.put('/user-update/:id',userUpdateController)
api.delete('/user-delete/:id',userDeleteController)
/* api.post('/user-seeder',userSeederController)
api.post('/user-login',userLoginController) */

module.exports = api