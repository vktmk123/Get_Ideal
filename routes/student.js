const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const studentController = require('../controller/student');
const { isStudent } = require("../middleware/auth");

const storageQAmanager = multer.diskStorage({
    destination:function(req, file, callback){
        callback(null, req.body.path);
        // console.log(req.body)
    },
    //add back the extension
    filename:function(req, file, callback){
        callback(null, Date.now()+file.originalname);
    },
})

const uploadQAmanager = multer({
    storage:storageQAmanager,
    limits:{
        fieldSize:1024*1024*3
    },
})
router.get('/student', studentController.getStudent);
router.get('/student/viewStudent', studentController.viewStudent);

router.get('/student/addIdea',isStudent, studentController.addIdea);
router.post('/student/doAddIdea',isStudent, studentController.doAddIdea);
router.post('/student/doAddFile',isStudent, uploadQAmanager.any('ideas'), studentController.doAddFile);
router.post('/student/searchStudent',isStudent, studentController.searchStudent);

router.get('/student/viewLastestIdeas',isStudent, studentController.viewLastestIdeas);
router.get('/student/viewMostViewedIdeas',isStudent, studentController.viewMostViewedIdeas)

router.get('/student/viewSubmittedIdeas',isStudent, studentController.viewSubmittedIdeas);
router.get('/student/viewEventDetail',isStudent, studentController.viewEventDetail);

router.post('/student/viewEventDetail',isStudent, studentController.viewEventDetail);
router.post('/student/viewEventDetail/Comment',isStudent, studentController.doComment);
router.post('/student/searchEvent',isStudent, studentController.searchEvent);

router.post('/student/addLike', studentController.addLike);
router.post('/student/addDislike', studentController.addDislike);

router.get('/student/viewLatestComments',isStudent, studentController.viewLatestComments);
router.get('/student/viewMostViewedIdeas',isStudent, studentController.viewMostViewedIdeas)
router.get('student/testPagination',isStudent, studentController.paginations)
router.get('/student/viewMostComments',isStudent,studentController.viewMostComments);

router.post('/student/viewLastestIdeas',isStudent, studentController.filterLastestIdeas);
router.post('/student/mostViewedIdeas',isStudent, studentController.filterMostViewIdeas);
router.post('/student/viewLatestComments',isStudent, studentController.filterLatestComment);
router.post('/student/viewMostComments',isStudent,studentController.filterMostComments);

router.get('/student/changePassword', isStudent, studentController.changePassword)
router.post('/student/doChangePassword', isStudent, studentController.doChangePassword)

module.exports = router;