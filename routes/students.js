var express = require('express');
var router = express.Router();
const studentController = require('../controllers/students');


/* GET list page. */
router.get('/', studentController.list);

/* GET details page */
router.get('/details/:id', studentController.details);

//GET Topper

router.get('/topper', studentController.topper);

/* GET edit page */
router.get('/edit/:id', studentController.edit);

/* POST update page */
router.post('/update/:id', studentController.update);


/* POST add New students page */
router.get('/addStudent',  studentController.addStudent);

/* GET add page  */
router.post('/add', studentController.add);

//GET delete page//
router.get('/delete/:id', studentController.delete);
module.exports = router;
