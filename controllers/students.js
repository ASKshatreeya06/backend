const students = require('../models/students');


//list displar
module.exports.list = function(req,res){

        res.render('students/student-list', { title : 'Students',students:students})

}

//Topper

module.exports.topper = function(req,res){
	let max = Math.max(...students.SGP);
//	res.render('students/topper-student', {title: 'Topper'}); 
}

//details

module.exports.details = function(req,res){

	let id = req.params.id;
	let student = students.find(student => student.id == id );
	res.render('students/students-details', {id : id,  title: 'students details', Collage : student.Collage});

}

//Edit Details
module.exports.edit = function(req,res){

        let id = req.params.id;
        let student = students.find(student => student.id == id );
        res.render('students/students-edit', { id : id, title: 'students details', student : student});

}

//Update Details
module.exports.update = function (req,res){

	let id = req.params.id;
	let student = students.find( student => student.id == id);
	student.First_name = req.body.First_name;
	student.Last_name = req.body.Last_name;
	student.SGP = req.body.SGP;
	student.Semester = req.body.Semester;
	student.Department = req.body.Department;
	student.Collage.Collage_name = req.body.Collage_name;
	student.Collage.Zip = req.body.Zip;
	student.Collage.branch  = req.body.branch;
	student.Collage.Contact = req.body.Contact;
	
	res.render('students/students-update', {title: 'update'});
	console.log(res.err)
}

// added students
module.exports.add = function(req,res){

	let min = 1;
	let max = 1000;
	let id = Math.floor(Math.random() * (max-min) + min);
	 let student = {
	id: id,
        First_name : req.body.First_name,
        Last_name : req.body.Last_name,
        SGP : req.body.SGP,
        Semester : req.body.Semester,
        Department : req.body.Department,
        Collage:{
	Collage_name : req.body.Collage_name,
        Zip : req.body.Zip,
        branch  : req.body.branch,
        Contact : req.body.Contact

	}
}
 	// Add new students to list
	students.push(student);
	res.render('students/students-add',{title: 'Students Added'});
	
}
//add form
module.exports.addStudent = function(req,res){

	res.render('students/add-student', {title: 'Add students'});

}


//Delete students

module.exports.delete = function(req,res){

        let id = req.params.id;
        let student = students.find(student => student.id == id );
	let Collage = student.Collage.Collage_name;
	let idx = students.indexOf(students.find(student => student.id == id ));
	//Remove the elemtent at the index of idx
	students.splice(idx,1);



       res.render('students/students-delete', { title: 'students delete', id:student.id,  First_name:student.First_name, Last_name:student.Last_name});

}

