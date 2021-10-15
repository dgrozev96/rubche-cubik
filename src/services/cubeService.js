const Cube = require('../models/Cube');
const cubeDb =[];
const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id)
const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty)

    // cubeDb.push(cube)
    Cube.add(cube);
}

const cubeService = {
    getAll,
    create,
    getOne,
    
}
module.exports = cubeService
