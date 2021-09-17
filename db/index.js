const { Sequelize } = require('sequelize')
// outputting sequelize model template
module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost:3306/ecommerce_db')
