import "./FooterStyles.css"

import React from 'react'

import {FaSchool} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSchool size={20} style={{color:"white",marginRight:"2rem"}}/>
            <div>
              <p>Schedule time with a tutor today.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Our Tutoring App</h4>
          <p>Our tutoring app connects students with experienced tutors in a variety of subjects. With our easy-to-use platform, you can find and schedule tutoring sessions with just a few clicks.</p>
        </div>
      </div> 
    </div>
  );
}

export default Footer
