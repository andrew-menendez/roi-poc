var Sequelize = require("sequelize")
var Models = require("./models");
var db = new Sequelize('roipoc', 'andrew', 'apples', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .then(() => {
    Models.User.findAll().then((x) => {
      //console.log(x)
      console.log(x[0].dataValues)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
