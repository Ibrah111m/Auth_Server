const User = require('../models/User');
const Group = require('../models/Group');

exports.addUser = async (userData) => {
  return await User.create(userData);
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.updateUserById = async (id, newUserData) => {
  return await User.update(newUserData, { where: { id } });
};

exports.deleteUserById = async (id) => {
  return await User.destroy({ where: { id } });
};

exports.getUsers = async () => {
  return await User.findAll();
};

exports.addGroup = async (groupName) => {
  return await Group.create({ name: groupName });
};

exports.listGroups = async () => {
  return await Group.findAll();
};

exports.deleteGroup = async (groupName) => {
  return await Group.destroy({ where: { name: groupName } });
};
