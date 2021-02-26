const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const homeController = require('../controllers/home.controller');

// Middleware
const {restrict} = require('../middlewares/restrict')

// Homepage
router.get('/api/v1/', restrict, homeController.index)

// Register
router.post('/api/v1/auth/register', authController.register);

// Login
router.post('/api/v1/auth/login', authController.login);

// Whoami page
router.get('/api/v1/auth/whoami', restrict, authController.whoami);

// Logout
router.post('/api/v1/auth/logout', restrict, authController.logout);

module.exports = router;
