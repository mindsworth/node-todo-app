//IMPORTING PACKAGES

const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');

// INTIALIZING EXPRESS

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// SETTING UP THE VIEW ENGINE

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

// EXAMPLE ROUTING

app.get('/', (req, res) => {
  res.render('index', {});
});

app.post

app.listen(3000, () => console.log('Listening on port 3000'));
