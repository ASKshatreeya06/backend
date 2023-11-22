var express = require('express');
var router = express.Router();

const mainController = require('../controllers/main.controller');

//HTTP Verbs: POST, GET, PUT, DELETE



//Post //api/studetns
router.post('/students', mainController.create);

//Get /api/students
router.get('/students', mainController.readAll);

//Get one /api/students/123
router.get('/students/:id', mainController.readOne);

//Put /api/students/123
router.put('students/:id', mainController.update);

//delete one  students /api/students

router.delete('/students/:id', mainController.deleteOne);

// Delete All students /api/students
router.delete('/students', mainController.deleteAll);


module.exports = router;
