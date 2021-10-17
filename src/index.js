const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const initDatabase = require('./config/database');


app.use(express.urlencoded({extended: true}));

require('./config/handlebars')(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes)

initDatabase(config.DB_CONNECTION_STRING)
.then(() => {
    app.listen(config.PORT, console.log.bind(console, `App s running on http://localhost:${config.PORT}`));
})
.catch(err => {
    console.log('App init failed', err);
})




