//packages
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

//settings
const app = express();
const port = process.env.PORT || 3000;

//application params
var piratesController = require('./controllers/pirates');

//views
app.use(bodyParser.urlencoded({
   extended: true
 }));
app.use(methodOverride('_method'));
 app.use('/pirates', piratesController);
 app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

//home
app.get('/', function(req, res) {
  res.send('howdy.');
});

//listen
app.listen(port, function() {
  console.log ("ready to sail the seven seas on port " + port);
});
