var Schema = require("../db/schema.js");
//normally you would make routers and shit, but we're mot focusing on that right now
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

router.get('/', () => {
    StudentModel.find({})
    .then(function(err, students) {
      if (err) {
        console.log(err);
        return;
      }

      response.render('students', {
        students: students
      })
    });
});

router.get('/:id', (request, response)=>{
  const studentId = request.params.id;
  studentModel.findById(studentId).then((error, student) => {
    .then((student)=>{
      request.render('students/show', {
      student: student
    })
  })
  .catch((error) => {
    console.log(error);
  })
})


studentsController.index();
