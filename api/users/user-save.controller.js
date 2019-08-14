'use strict'
const db = require('../../app/config/mysql-db.config')
const Users = db.users
const debug = require('debug')('rest-api:user-save')
const bcrypt = require('bcrypt')
const user = {}

module.exports = async (req,res) => {
      user.email      = req.body.email
      user.firstname  = req.body.firstname
      user.lastname   = req.body.lastname
      user.cep        = req.body.cep
      user.state      = req.body.State
      user.password   = req.body.password
    try {
      if( user.firstname && user.lastname && user.cep && user.state && user.email && user.password){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash
        const userSaved = await Users.create(user)
        if (userSaved)
            res.status(200).send({ user : userSaved})
         else
            res.status(404).send({ message:'no se ha registrado el usuario'})
      } else
        res.status(404).send({ message:'faltan datos'})
    } catch (error) {
        if (error.code === 11000) {
            debug('ERROR: element existe')
          } else {
            debug('ERROR: save users', error)
            throw Error(error)
          }
    }
}