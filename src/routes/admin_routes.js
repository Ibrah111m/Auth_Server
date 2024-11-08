const router = require('express').Router();
const adminController = require('../controllers/admin_controller');

router.post('/users', adminController.createUser);
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

router.post('/groups', adminController.createGroup);
router.get('/groups', adminController.getGroups);
router.delete('/groups/:name', adminController.deleteGroup);

module.exports = router;
