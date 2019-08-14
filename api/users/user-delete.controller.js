'use strict'
const db = require('../../app/config/mysql-db.config')
const Users = db.users
const debug = require('debug')('rest-api:user-update')

module.exports = async (req,res) => {
    try {
        const userDelete = await Users.destroy({ where: {id: req.params.id} })
        console.log('userDelete',userDelete)
        if (userDelete)
            res.status(200).send({ user : userDelete})
         else
            res.status(404).send({ message:'not delete user'})
    } catch (error) {
        debug('ERROR: delete users', error)
        throw Error(error)
    }
}