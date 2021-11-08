var router = require('express').Router();
const homeController = require('../controllers/home.controller');

// Homepage
router.get('/', homeController.index);

module.exports = router;