var students = require('../models/students.models');


//Util function

//Check list if Empty
function isEmptyList(obj){

	return (!obj || obj.lenght == 0 || Object.key(obj).lenght == 0);

}
//Check for existing student
function existsStudent(id){
	return students.find(student => student.id == id);

}

//Getnerate a unique student id
function getUniqueId(students){
	let min = 1;
        let max = 1000;
        do{
	var id = Math.floor(Math.random() * (max-min) + min);
	}while(existsStudent(id));
	return id;
}


// CRUD Create (Post), Read (Get), Update (put), Delete

//POST
//uri:  /api/students
module.exports.create = function(req,res){
try{ if(isEmptyList(students)){

	students =[];
}

 var id = req.body.id;
 if(existsStudent){
	res.status(400);
	res.send("Duplicate id not allowed.");
	id = getUniqueId(); //get new id

}
 var student = req.body; // get new student
 student.id = id;
 // Add new students to list

        students.push(student);
	res.status(200); 
       res.send(student);

}
catch(error){log(error)}
}
//GET
//uri:  /api/students
module.exports.readAll = function(req,res){
	res.status(200);
	  res.send(students);

}

//GET one
//uri:  /api/students//123
module.exports.readOne = function(req,res){

  let id = req.params.id;
        let student = students.find(student => student.id == id );
        res.status(200);
	res.send(student);

}

//PUT
//uri:  /api/students/123
module.exports.update = function(req,res){

	let id = req.params.id;
        let student = students.find( student => student.id == id);
        student.First_name = req.body.First_name;
        student.Last_name = req.body.Last_name;
        student.SGP = req.body.SGP;
        student.Semester = req.body.Semester;
        student.Department = req.body.Department;
        student.Collage.Collage_name = req.body.Collage.Collage_name;
        student.Collage.Zip = req.body.Collage.Zip;
        student.Collage.branch  = req.body.Collage.branch;
        student.Collage.Contact = req.body.Collage.Contact; 
	res.status(200);
        res.send(student);


}

//delete One
//uri:  /api/students/123
module.exports.deleteOne = function(req,res){

 let id = req.params.id;
        let student = students.find(student => student.id == id );

        let idx = students.indexOf(student);
        //Remove the elemtent at the index of idx
        students.splice(idx,1);
	
	res.status(200);
	res.send(student);



}

//Delete all
//uri:  /api/students
module.exports.deleteAll = function(req,res){
let  students=[];
res.status(200);
 res.send("All students Deleted");

}
