const express = require('express');

const {createStudent,getAllStudents,studentLogin,studentRegister}=require('../controllers/studentcontroller');
// const bcrypt = require("bcryptjs");
// const jwt=require("jsonwebtoken");

const router = express.Router();

// load validation 
// const validateRegisterInput = require("../validation/register");


// const validateLoginInput = require("../validation/login");
// const User=require("../models/studentModel");




// router.route("/").get(homePage); // set the view directory 
router.route("/student/new").post(createStudent);
router.route("/student/details").get(getAllStudents);

// for login 
router.route("/student/login").post(studentLogin);

// for register
// router.route("/register").post(createStudent);



module.exports = router ;