
//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page index
router.get('/', function(req, res){
    res.render("pirates/index", {
        pirates: pirates.seededPirates
    });
});


router.get('/new', function(req, res){
    res.render("pirates/new");
});


//this is for each pirate page
router.get('/:id', function(req, res){

    //grab the pirate by id
    var showPirate = pirates[req.params.id];

    res.render("pirates/show", {
        pirate: showPirate
    });
});

//==============================
// CREATE
//==============================

router.post('/', (req, res) => {
    console.log(req.body);

   const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        yearOfDeath: req.body.yearOfDeath,
        base: req.body.base,
        nickname: req.body.nickname
    };

   pirates.push(newPirate);

   res.redirect("/pirates");
});

//==============================
// UPDATE
//==============================
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var name =req.body.name;
  var birthplace = req.body.birthplace;
  var yearOfDeath = req.body.yearOfDeath;
  var base = req.body.base;
  var nickname = req.body.nickname;
  res.method = "GET";
  res.redirect = (`/pirates/${id}`);
});
//==============================
// SAVE
//==============================
router.post('/', function (req, res) {
  console.log(req.body);
  pirates.seededPirates.push(newPirate);
  res.redirect("/name");
});
//==============================
// DESTROY
//==============================
router.delete('/:id', function (req, res) {
  data.seededPirates.splice(req.params.id, 1);
  res.method = "GET";
  res.redirect('/pirates');
});
//==============================
// EXPORTS
//==============================

module.exports = router;
