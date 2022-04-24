const Student = require("../models/studentModel.js");
const ApiFeatures = require("../utils/apifeatures");
const catcheASyncError = require("../middelware/catcheAsyncError");
const catcheAsyncError = require("../middelware/catcheAsyncError");
// create student  -- admin
exports.createStudent = catcheASyncError(async(req,res,next)=>{
    
    const {name,email,passowrd} = req.body
    Student.findOne({email:email},(err,student)=>{
        if(student){
            res.send({message:"user already registered"})
        }else{
         const student = new Student({
             name,email,passowrd
         })
          res.status(201).json({
              success:true,
              student
          })
          student.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"successfully registered"})
              }
          })
      
      
        }
    })
})
// get all student 
exports.getAllStudents = catcheASyncError(async(req,res)=>{

    const resultperPage=5;
const studentCount= await student.countDocuments();
   const apiFeatures=new ApiFeatures(Student.find(),req.query).search().filter().pagination(resultperPage);
    const student =await apiFeatures.query;
    res.status(200).json({
        success:true,
        student,
        studentCount,
        
    })
});

// this is for login 

exports.studentLogin = catcheAsyncError(async(req,res)=>{
    const {email,passowrd}=req.body
    Student.findOne({email:email},(err,student)=>{
        if(student){
if(passowrd===student.passowrd){
res.send({message:"Login Succesfull ",student:student})
}else{
    res.send({message:"password is invelid "})
}
        }else{
            res.send({message:
                "user not registered "}
            )
        }
    })
})

// this is for register 

exports.studentRegister = catcheAsyncError(async(req,res)=>{
    res.send('my API register')
})
