const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const router = express.Router();

router.use(homeController)
router.use(cubeController)
router.use(aboutController)

module.exports = router;