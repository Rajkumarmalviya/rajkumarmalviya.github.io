import React from "react";

// import {useParams} from "react-router-dom";


import { Link } from "react-router-dom";

const userProfile=()=>{
    // const {userName} = useParams();
    return(
        <div className="userprofile">
  <nav className="navigation">
        
        <ul>
            <li className="li"><Link to="/" className="Linkofhome">Home</Link></li>
        <li className="li"><Link to="/courses" className="Linkofhome">Courses</Link></li>
        <li className="li"><Link to="/notices" className="Linkofhome">Notices</Link></li>
        <li className="li"><Link to="/contact" className="Linkofhome">Contact</Link></li>
        <div className="li"><Link to="/users/usereProfile" className="Linkofhome">profile</Link></div>
        </ul>
                
            
            </nav>

        </div>
    )
}

export default userProfile