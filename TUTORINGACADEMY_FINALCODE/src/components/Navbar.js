import "./NavbarStyles.css"


import React, {useState} from "react"
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor]= useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
        setColor(true);
    }else{
        setColor(false);
    }
    };

window.addEventListener("scroll",changeColor)

  return (
    <div className={color ? "header header-bg": "header"}>
        <div>
         <img style={{ width: 100, height: 100 }} src={"./TAlogo.png"} alt="React Logo" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
              <Link to="/" style={{ color: '#61B0B7' }}>Home</Link>
        </li>  
        <li>
              <Link to="/infotutor" style={{ color: '#61B0B7' }}>Info Tutor</Link>
        </li>  
        <li>
              <Link to="/tutor-directory" style={{ color: '#61B0B7' }}>Tutor Directory</Link>
        </li>  
         
        <li>
              <Link to="/myschedule" style={{ color: '#61B0B7' }}>My Schedule</Link>
        </li>  
        <li>
      <Link to="/TutorSignUp" style={{ color: '#61B0B7' }}>Tutor Sign Up</Link>
      </li>  
        <li>
              <Link to="/reservetutor" style={{ color: '#61B0B7' }}>Reserve A Tutor</Link>
        </li>  
        <li>
              <Link to="/favorites" style={{ color: '#61B0B7' }}>Favorites</Link>
        </li>  
        <li>
              <Link to="/SignUp2" style={{ color: '#61B0B7' }}>Sign Up</Link>
        </li>  
        <li>
              <Link to="/Login2" style={{ color: '#61B0B7' }}>Login</Link>
        </li> 
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} /> ) : 
            (<FaBars size={20} style={{color: "#fff"}} />)}
            
           
        </div>
    </div>
  );
}

export default Navbar;