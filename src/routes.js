const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const router = express.Router();

router.use(homeController)
router.use('/cube',cubeController)
router.use(aboutController)
router.use('*', (req, res) => {
    res.render('404')
})

module.exports = router;