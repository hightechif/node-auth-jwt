var router = require('express').Router();
const authController = require('../controllers/auth.controller');
const {restrict} = require('../middlewares/restrict') // Middleware

router.post('/register', authController.register); // Register
router.post('/login', authController.login); // Login
router.get('/whoami', restrict, authController.whoami); // Whoami page
router.post('/logout', restrict, authController.logout); // Logout

module.exports = router;
