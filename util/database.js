var express = require('sequelize');
var process = require('process');

var sequelize = new express.Sequelize(
  process.env.DATABASE_URL,
  {
    dialectOptions: {
      ssl: false,
    },
    pool: {
      max: 10,
      min: 0,
      idle: 20000,
    },
    dialectModule: require('mysql2'),
  },
);

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database Connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {checkConnection, sequelize};