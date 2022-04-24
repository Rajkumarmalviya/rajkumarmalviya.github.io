import React from "react";
import "./login.css"
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
// import { response } from "../../../../app";
// import { useNavigate } from "react-router-dom";
// import userProfile from "../users/userProfile";
// const history = useHistory();
const Login= () =>{
        const [ student, setStudent] = useState({
            email:"",
        password:""
    })

    // use history to redirect user at his profile page 
    // const history = useNavigate();

    
    const handleChange= e => {
        const {name, value} =e.target;
        setStudent({
            ...student,
            [name]:value
        })

        // history(<userProfile/>)
    }
const login = () =>{
    axios.post("http://localhost:4000/api/v1/student/login",student).then(res=> console.log(res))
}
    return(
        <div className="login">
            <h1>login</h1>
            <input type="email"  name="email" value={student.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input type="password" name="password" value={student.password} placeholder="Enter your password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div className="or">or</div>
            <div className="register"><Link to="/register" className="Link" >Register</Link></div>
            </div>
    )
}

export default Login