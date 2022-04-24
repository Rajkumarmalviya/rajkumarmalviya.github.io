import React from "react";
import "./homepage.css"
import {Link} from "react-router-dom";
import pr1 from "../static/pr1.jpg"
import pr2 from "../static/pr2.jpg"
import pr3 from "../static/pr3.jpg"
import pr5 from "../static/pr5.jpg"
import pr6 from "../static/pr6.jpg"

const Homepage = () =>{ 
    return(
        <div className="homepage">
                <nav className="navigation">
        
<ul><li className="li"><Link to="/" className="Linkofhome">Home</Link></li>
<li className="li"><Link to="/courses" className="Linkofhome">Courses</Link></li>
<li className="li"><Link to="/notices" className="Linkofhome">Notices</Link></li>
<li className="li"><Link to="/contact" className="Linkofhome">Contact</Link></li></ul>
        
    
    </nav>
    <section className="gallery">
        <img src={pr1} alt="p1"></img>
        <img src={pr2} alt="p2"></img>
        <img src={pr3} alt="p3"></img>
        <img src={pr5} alt="p4"></img>
        <img src={pr6} alt="p5"></img>
    </section>
    <div class="div-of-gallery">Gallery</div>
    <div><ul className="ulOfButtons"><li className="button"><Link to="/register" className="Link">Register</Link></li>
    <li className="button"><Link to="/login" className="Link">Login</Link></li></ul>
    </div>

    <div>
        <img src="../static/Ajit.jpeg" alt="not availabel"/>
        <label for="name" className="directorsir">AJIT UPADHYAY</label>
    </div>
            {/* <div className="button">
                logout
                </div> */}
                </div>
    )
}

export default Homepage 