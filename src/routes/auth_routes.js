const router = require('express').Router();
const authController = require('../controllers/auth_controller');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
