const express = require('express');
const hbs = require('hbs');


const app = express();
const port =process.env.PORT || 3000;
const RecipesController = require('./recipes');

app.set('view engine', 'hbs');

app.use('/recipes', RecipesController);





app.listen(port, function () {
  console.log("port is active on " + port);
});
