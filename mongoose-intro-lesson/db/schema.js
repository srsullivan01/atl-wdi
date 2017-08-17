var mongoose = require('mongoose');

var Schema = mongoose.Schema;

///connections////
/*mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});
db.once('open', function() {
  console.log("database has been connected!");
}); */
/////
var ProjectSchema = new Schema({
  title: String,
  unit: String
});
//project is the top layer of our inbedded schemas
//not that it matters bc js doesnt run in order, but avoid hoisting if you can
const HomeworkAssignment = new Schema ({
  title: String,
  dueDate: Date
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema],
  //please note that projects is defined as an array of schemas,
  HomeworkAssignment: [HomeworkAssignment]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);


module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel,
};
