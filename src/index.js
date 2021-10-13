const express = require('express');
const app = express();

require('./config/handlebars')(app);


app.all('/', (req, res) =>{
    res.render('index');
});

app.listen(5001, console.log.bind(console, 'App s running on http://localhost:5001'));
