//require stuff in
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
//mongoose config
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});
db.once('open', function() {
  console.log("database has been connected!");
});
db.close();
