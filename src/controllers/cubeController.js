const express = require('express');

const cubeService = require('../services/cubeService');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes);
    res.render('create');
};

const createCube = (req, res) => {
    console.log(req.body);
    let { name, description, imageUrl, difficulty } = req.body;
    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/cube/create')
}


router.get('/cube/create', getCreateCubePage);
router.post('/cube/create', createCube)
module.exports = router;

