const Validator = require("validator");
const isEmpty = require("is-empty");

module.export = function validateLoginInput(data){

    let errors = {};

    // convert an empty field to an empty string so we can use validator functions 

    data.name = !isEmpty(data.name)?data.name:"";
    data.email = !isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password)?data.password:"";


     // email checks 
     if(Validator.isEmpty(data.email)){
        errors.email= "email field is required ";

    }else if(!Validator.isEmpty(data.email)){
        errors.email= "email is invalid ";
    }

     // Password checks 
     if(Validator.isEmpty(data.password)){
        errors.password= "password field is required ";

    }
    

    return{
        errors,
        isValid:isEmpty(errors)
    };

};