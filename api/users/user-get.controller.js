'use strict'
const db = require('../../app/config/mysql-db.config')
const Users = db.users
const debug = require('debug')('rest-api:user-get')

module.exports = async (req,res) => {
    try {
        const users = await Users.findAll()
        if (users)
            res.status(200).send({ users : users})
         else
            res.status(404).send({ message:'No hay usuario'})
    } catch (error) {
            debug('ERROR: get users', error)
            throw Error(error)
    }
}