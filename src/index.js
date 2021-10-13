const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');


app.set('views', path.resolve('./src/views'))
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.all('/', (req, res) =>{
    res.render('index');
});

app.listen(5001, console.log.bind(console, 'App s running on http://localhost:5001'));
