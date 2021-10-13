const express = require('express');
const app = express();

app.all('/', (req, res) =>{
    res.write('Its working');
    res.end();
});

app.listen(5001, console.log.bind(console, 'App s running on http://localhost:5001'));
