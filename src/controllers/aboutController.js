const express = require('express');

const router = express.Router();

const about = (req, res) => {
    res.render('about');

};

router.get('/about', about);
module.exports = router;

