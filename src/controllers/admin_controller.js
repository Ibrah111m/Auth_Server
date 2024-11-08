const {
    addUser, getUserById, updateUserById, deleteUserById, getUsers,
    addGroup, listGroups, deleteGroup
  } = require('../domain/user_handler');
  
  exports.createUser = async (req, res) => {
    const user = req.body;
    const newUser = await addUser(user);
    res.status(201).json(newUser);
  };
  
  exports.getAllUsers = async (req, res) => {
    const users = await getUsers();
    res.status(200).json(users);
  };
  
  exports.getUser = async (req, res) => {
    const user = await getUserById(req.params.id);
    user ? res.json(user) : res.status(404).send('User not found');
  };
  
  exports.updateUser = async (req, res) => {
    const updated = await updateUserById(req.params.id, req.body);
    updated ? res.send('User updated successfully') : res.status(404).send('User not found');
  };
  
  exports.deleteUser = async (req, res) => {
    const deleted = await deleteUserById(req.params.id);
    deleted ? res.send('User deleted successfully') : res.status(404).send('User not found');
  };
  
  exports.createGroup = async (req, res) => {
    const group = await addGroup(req.body.name);
    res.status(201).json(group);
  };
  
  exports.getGroups = async (req, res) => {
    const groups = await listGroups();
    res.status(200).json(groups);
  };
  
  exports.deleteGroup = async (req, res) => {
    const deleted = await deleteGroup(req.params.name);
    deleted ? res.send('Group deleted successfully') : res.status(404).send('Group not found');
  };
  