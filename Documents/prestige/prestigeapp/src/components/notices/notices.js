import React from "react";
import "./notices.css";
import {Link} from "react-router-dom";
const Notices=() =>{
   return ( <div className="notices">
        <nav className="navigation">
        
        <ul><li className="li"><Link to="/" className="Linkofhome">Home</Link></li>
        <li className="li"><Link to="/courses" className="Linkofhome">Courses</Link></li>
        <li className="li"><Link to="/notices" className="Linkofhome">Notices</Link></li>
        <li className="li"><Link to="/contact" className="Linkofhome">Contact</Link></li></ul>
                
            
            </nav>
    </div>
   )

}

export default Notices