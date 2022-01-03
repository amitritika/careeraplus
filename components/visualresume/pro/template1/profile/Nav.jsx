import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState, useEffect } from 'react';
import {FaHome, FaBookReader, FaTools, FaCode, FaComments, FaGraduationCap, FaFile, FaAward, FaPhone, FaUserPlus, FaCertificate,  FaMedapps, FaUserCog, FaBook, FaFolderOpen, FaCogs, FaCog } from 'react-icons/fa';
const Nav = (props) => {
  
  const [styleL, setStyleL] = useState({backgroundColor: `${props.bg}`, color: `${props.font}`});
  
  const toggleStyle = () =>{
    setStyleL({backgroundColor: `${props.font}`, color: `${props.bg}`})
  }
  
  const toggleStyleI = () =>{
    setStyleL({backgroundColor: `${props.bg}`, color: `${props.font}`})
  }
  
  
  const comp =  {
                userInfo : FaHome, 
                personalInfo : FaPhone,
                profileSummaryInfo: FaHome,
                competenciesInfo: FaUserCog,
                workexpInfo: FaCog,
                techSkillsInfo : FaBookReader,
                toolSkillsInfo: FaTools,
                progSkillsInfo: FaCode,
                softSkillsInfo: FaComments,
                projectsInfo: FaFolderOpen,
                educationInfo: FaGraduationCap,
                porInfo: FaUserPlus,
                trainingInfo: FaCogs,
                certificationInfo: FaAward,
                achievmentsInfo: FaAward,
                publicationInfo: FaBook,
                areaOfIntrestInfo: FaMedapps,
                hobbiesInfo: FaMedapps
  }
  
  const list = [
    {name:"userInfo",value: "Home"}, 
    {name:"competenciesInfo",value: "Competencies"}, 
    {name:"techSkillsInfo",value: "Technical Skills"}, 
    {name:"toolSkillsInfo",value: "Tool Skills"}, 
    {name:"progSkillsInfo",value: "Programming Skills"}, 
    {name:"softSkillsInfo",value: "Soft Skills"}, 
    {name:"educationInfo",value: "Education"}, 
    {name:"workexpInfo",value: "Work Experience"}, 
    {name:"projectsInfo",value: "Projects"}, 
    {name:"trainingInfo",value: "Industrial Trainings"}, 
    {name:"hobbiesInfo",value: "Area Of Intrest"}, 
    {name:"porInfo",value: "Position of Responsiblity"},
    {name:"certificationInfo",value: "Awards & Certfications"},
    {name:"publicationInfo",value: "Publications"},
    {name:"personalInfo",value: "Contact"}
  ]
  
  const navShow = () => {
    let Comp = null;
    let to = null;
    return (
      list.map ((l, i) => {
        Comp = comp[l.name];
        to = props.name[l.name];
        if(l.name == "certificationInfo"){
          if(props.display.certificationInfo || props.display.achievmentsInfo){
            return (
              <Link activeClass = "active" to = {to} spy = {true} smooth= {true}>
                <li className = "u-margin-bottom-small">
                  <a className = "fresher-template1-nav-item" style = {styleL}>
                    <Comp className = "fresher-template1-nav-item__icon" />
                    <span className = "fresher-template1-nav-item__text">{l.value}</span>
                  </a>
                </li>
              </Link>
            )
          }
        }else{
          if(props.display[l.name]){
            return (
              <Link activeClass = "active" to = {to} spy = {true} smooth= {true}>
                <li className = "u-margin-bottom-small">
                  <a className = "fresher-template1-nav-item" style = {styleL}>
                    <Comp className = "fresher-template1-nav-item__icon" />
                    <span className = "fresher-template1-nav-item__text">{l.value}</span>
                  </a>
                </li>
              </Link>
            )
          }
        }
        
      
    })
    )
    
  }
  
  return (
    <div className = "fresher-template1-nav">
      <ul>
        {navShow()}
        
      </ul>
    </div>
  )
}

export default Nav;