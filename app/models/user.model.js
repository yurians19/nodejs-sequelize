module.exports = (sequelize, Sequelize) => {
  return  sequelize.define('user', {
    email: {
    type: Sequelize.STRING
    },
    firstname: {
    type: Sequelize.STRING
    },
    lastname: {
    type: Sequelize.STRING
    },
    cep: {
      type: Sequelize.INTEGER
    },
    state: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  })
}