import React from "react";
import "./courses.css";
// import axios from "axios"
import { Link } from "react-router-dom";

const Courses=() =>{
   return(
     <div className="courses">
  <nav className="navigation">
        
        <ul><li className="li"><Link to="/" className="Linkofhome">Home</Link></li>
        <li className="li"><Link to="/courses" className="Linkofhome">Courses</Link></li>
        <li className="li"><Link to="/notices" className="Linkofhome">Notices</Link></li>
        <li className="li"><Link to="/contact" className="Linkofhome">Contact</Link></li></ul>
                
            
            </nav>


     </div>
   )


}

export default Courses