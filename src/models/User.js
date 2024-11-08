const sequelize = require('../database/database'); 
const { DataTypes } = require('sequelize'); 

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = User; 
