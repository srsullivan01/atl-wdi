
var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

// First we clear the database of existing students and projects.
StudentModel.remove({}, function(err) {
  console.log(err);
});

ProjectModel.remove({}, function(err) {
  console.log(err);
});

// Now, we will generate instances of a Student and of their Project.
var becky = new StudentModel({name: "Becky"});
var brandon = new StudentModel({name: "Brandon"});
var steve = new StudentModel({name: "Steve"});

var project1 = new ProjectModel({title: "Project 1!!", unit: "JS"});
var project2 = new ProjectModel({title: "Project 2!!", unit: "Express"});
var project3 = new ProjectModel({title: "Project 3!!", unit: "Angular"});
var project4 = new ProjectModel({title: "Project 4!!", unit: "Rails"});

// create two arrays that we can iterate over
var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];

// Here we assign some projects to each student.
students.forEach(function(student, i){
  student.projects.push(projects[i], projects[i + 1]);

  student.save(function(err) {
    if(err) {
      console.log(err);
      return;
    }

    console.log(student);
  });
});
