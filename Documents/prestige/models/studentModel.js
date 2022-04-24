const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        // required:[true,"please Enter your name"],
        trim:true
    },
    email:{
        type:String,
        // required:[true,"please enter your email"]
    },
    password:{
        type:String,
        // required:[true,"please enter your number "],
        maxLength:[11,"number does not exist"]
    },
   reEnterPassword:{
type:String,
maxlength:[11,"number does not exist"]
   },
  
   
    createdAt:{
        type:Date,
        default:Date.now
    }

})

// const user = new mongoose .model("user",userShema)
module.exports = mongoose.model("student",studentSchema);