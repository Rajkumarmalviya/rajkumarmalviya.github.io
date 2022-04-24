import React from "react";
import './contact.css';
import {Link} from "react-router-dom";

const Contact=()=>{
   return( <div className="contact">
        <nav className="navigation">
        
        <ul><li className="li"><Link to="/" className="Linkofhome">Home</Link></li>
        <li className="li"><Link to="/courses" className="Linkofhome">Courses</Link></li>
        <li className="li"><Link to="/notices" className="Linkofhome">Notices</Link></li>
        <li className="li"><Link to="/contact" className="Linkofhome">Contact</Link></li></ul>
                
            
            </nav>
    </div>)
}

export default Contact ;
