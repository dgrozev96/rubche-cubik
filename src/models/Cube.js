const uniqid = require('uniqid');

class Cube {
    static cubes = [
        {
            name: 'Mirror CubeW',
            description: 'Strange cube',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Mirror_Cube_solved.png',
            difficulty: '4'
        }
    ]
    constructor(name, description, imageUrl, difficulty){
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static get cubes() {
        return Cube.cubes.slice();
    }
    static add(cube) {
        Cube.cubes.push(cube)
    }
}
module.exports = Cube;