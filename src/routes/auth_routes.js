const router = require('express').Router();
const authController = require("../controllers/auth_controller");

router.post('/login', authController.nologinLogin);
router.get('/login', authController.nologinLogin);

module.exports = router;


