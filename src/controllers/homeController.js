const express = require('express');

const router = express.Router();

const renderName = (req, res) => {
    res.render('index');

};

router.get('/', renderName);
module.exports = router;

