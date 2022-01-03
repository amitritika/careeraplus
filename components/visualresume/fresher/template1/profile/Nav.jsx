import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState, useEffect } from 'react';
import {FaHome, FaTools, FaGraduationCap, FaFile, FaAward, FaPhone } from 'react-icons/fa';
const Nav = (props) => {
  
  const [styleL, setStyleL] = useState({backgroundColor: `${props.bg}`, color: `${props.font}`});
  
  const toggleStyle = () =>{
    setStyleL({backgroundColor: `${props.font}`, color: `${props.bg}`})
  }
  
  const toggleStyleI = () =>{
    setStyleL({backgroundColor: `${props.bg}`, color: `${props.font}`})
  }
  
  return (
    <div className = "fresher-template1-nav">
      <ul>
        <Link activeClass = "active" to = "hero" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item" style = {styleL}>
              <FaHome className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Home</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "skills" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item"  style = {styleL}>
              <FaTools className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Skills</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "education" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item"  style = {styleL}>
              <FaGraduationCap className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Education</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "resume" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item"  style = {styleL}>
              <FaFile className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Resume</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "hobbies" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item"  style = {styleL}>
              <FaAward className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Extra</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "contact" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item"  style = {styleL}>
              <FaPhone className = "fresher-template1-nav-item__icon" />
              <span className = "fresher-template1-nav-item__text">Contact</span>
            </a>
          </li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Nav;