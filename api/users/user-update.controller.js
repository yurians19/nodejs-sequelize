'use strict'
const db = require('../../app/config/mysql-db.config')
const Users = db.users
const debug = require('debug')('rest-api:user-update')
const user = {}

module.exports = async (req,res) => {
      user.email      = req.body.email
      user.firstname  = req.body.firstname
      user.lastname   = req.body.lastname
      user.cep        = req.body.cep
      user.state      = req.body.State
      console.log('user',user)
    try {
        const userUpdated = await Users.update(user,{ where: {id: req.params.id} })
        console.log('userUpdated',userUpdated)
        if (userUpdated)
            res.status(200).send({ user : userUpdated})
         else
            res.status(404).send({ message:'not update user'})
    } catch (error) {
        debug('ERROR: update users', error)
        throw Error(error)
    }
}