import React,{useState}  from "react";
import "./register.css"
import axios from "axios"
import { Link } from "react-router-dom";
const Register = () =>{
    const [ student, setStudent] = useState({
        name:"",
        email:"",
    password:"",
reEnterPassword:""    })

const handleChange= e => {
    const {name, value} =e.target;
    setStudent({
        ...student,
        [name]:value
    })
}
const register = ()=>{
    const {name,email,password ,reEnterPassword}=student
    if(name && email&& password&&(password===reEnterPassword)){
        
        axios.post("http://localhost:4000/api/v1/student/new",student).then(res=>console.log(res))
    }else{
        alert("not posted")
    }
   
}
    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={student.name} placeholder="your name" onChange={handleChange}></input>
            <input type="email" name="email" value={student.email}placeholder="your email" onChange={handleChange}></input>
            <input type="password"name="password" value={student.password} placeholder="your password"onChange={handleChange} ></input>
            <input type="password"name="reEnterPassword" value={student.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div className="or">or</div>
            <div className="button"><Link to="/login" className="Link">Login</Link></div>
            </div>
    )
}

export default Register