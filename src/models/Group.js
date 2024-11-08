const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Group = sequelize.define('Group', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Group;
