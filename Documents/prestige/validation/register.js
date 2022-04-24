const Validator = require("validator");
const isEmpty = require("is-empty");


module.export = function validateRegisterInput(data){
    let errors = {};

    // convert an empty field to an empty string so we can use validator functions 
    data.name = !isEmpty(data.name)?data.name:"";
    data.email = !isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password)?data.password:"";
    data.reEnterPassword = !isEmpty(data.reEnterPassword)?data.reEnterPassword:"";

    // name checks 
    if(Validator.isEmpty(data.name)){
        errors.name= "Name field is required ";

    }
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
    
    if(Validator.isEmpty(data.reEnterPassword)){
        errors.reEnterPassword= "password is invalid ";
    }

    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password="password must be at lwat 6 characters ";
    }
    if(!Validator.isEmpty(data.reEnterPassword)){
        errors.reEnterPassword= "Password must match";

    }
    return{
        errors,
        isValid:isEmpty(errors)
    };
};