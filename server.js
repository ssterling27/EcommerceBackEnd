const express = require('express')
const { join } = require('path')
const { Sequelize, Model, DataTypes, Op } = require('sequelize')
// import sequelize connection
// const { Sequelize } = require('sequelize')
const app = express()

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost:3306/ecommerce_db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))
// app.use(require('./models'))

require('./config/connection.js').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
