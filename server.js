const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const timestamp = require('./timestamp.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
});

timestamp(app);

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});