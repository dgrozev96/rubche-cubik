const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');



require('./config/handlebars')(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes)


app.listen(5001, console.log.bind(console, 'App s running on http://localhost:5001'));
