//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');
const Donut = require('../models/donuts');
var mongoose = require("mongoose");
const router = express.Router();

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
  Donut.find({})
    .then((donuts) => {
      response.render(
        'donuts/index',
        { donuts }
      );
    })
    .catch((error) => {
      console.log('error retrieving donuts from datbase. :<)');
      console.log(error);
    });
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {
  response.render('donuts/new');
});





//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.post('/', (request, response) => {
  const newDonutInfoFromForm = request.body;

  Donut.create(newDonutInfoFromForm)
  .then((user) => {
    response.render(
      'donuts/show',
      { donut }
    )
  })
  .catch((error) => {
    console.log('error saving new donut to database');
    console.log(error);
  });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.get('/new', (request, response) => {
  response.render('donuts/new');
});




//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response) => {
  const donutIdToFind = request.params.id;
  Donut.findById(donutIdToFind)
  .then((user) => {
    response.render(
      'donuts/edit',
      { donut }
    );
  })
  .catch((error) => {
    console.log(`error editing ${donutIdToFind}`);
    console.log(error);
  })
});



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {
  const donutIdToUpdate = request.params.id;
  const updatedDonutInfo = request.body;

  Donut.findByIdAndUpdate(
    donutIdToUpdate,
    updatedDonutInfo,
    { new: true }
  )
  .then((user) => {
    console.log(`Donut with ID of ${donut._id} updated`);
    response.render(
      'donuts/show',
      { donut }
    )
  })
  .catch((error) => {
    console.log(`Donut with ID of ${donut._id} failed to update`);
    console.log(error);
  })
});



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (request, response) => {
  const donutIdToDelete = request.params.id;
  Donut.findByIdAndRemove(donutIdToDelete)
  .then(() => {
    console.log(`got rid of ${donutIdToDelete}. Was it gross?`);
    response.redirect('/donuts')
  })
});



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
