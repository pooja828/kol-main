const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const morgan = require('morgan')
const app = express()
const port = 3000

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

//127.0.0.1 - local host

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})