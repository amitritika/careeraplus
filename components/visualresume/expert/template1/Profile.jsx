import Nav from  "./profile/Nav";
import Hero from "./profile/Hero";
import Skills from "./profile/Skills";
import Competencies from "./profile/Competencies";
import Education from "./profile/Education";
import WorkExp from "./profile/WorkExp";
import POR from "./profile/POR";
import Projects from "./profile/Projects";
import Publication from "./profile/Publication";
import Trainings from "./profile/Trainings";
import Hobbies from "./profile/Hobbies";
import Resume from "./profile/Resume";
import Contact from "./profile/Contact";
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import {FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Profile = (props) => {
  const display = props.visualresumedata.data.layout.display;
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState("none");
  const [fade, setFade] = useState("move-to-top");
  
  const name = {
                userInfo : "hero", 
                personalInfo : "contact",
                profileSummaryInfo: "profile",
                competenciesInfo: "competencies",
                workexpInfo: "woekexp",
                techSkillsInfo : "techskills",
                toolSkillsInfo: "toolskills",
                progSkillsInfo: "progskills",
                softSkillsInfo: "softskills",
                projectsInfo: "projects",
                educationInfo: "education",
                certificationInfo: "cert",
                achievmentsInfo: "cert",
                publicationInfo: "publication",
                areaOfIntrestInfo: "hobbies",
                hobbiesInfo: "hobbies"
               }

  useEffect(()=> {
    const onScroll = e => {
      
      if(e.target.documentElement.scrollTop > 100){
        //console.log(e.target.documentElement.scrollTop);
        setDis("block");
        setFade("move-to-top-1 u-fadeIn");
      }else{
        setFade("move-to-top-1 u-fadeOut");
        setDis("none");
      }
     // console.log(e.target.documentElement.scrollTop);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const leftBlockShow = () => {
    
    return <LeftBlock id = "left-block" height = {297} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const rightBlockShow = () => {
    
    return <RightBlock id = "right-block" height = {297} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }

  return (
    <React.Fragment>
      
      <div className = "pro-template1-main">
        <div className = {fade} style = {{display: `${dis}`}} onClick = {()=>scroll.scrollToTop()}>
          <FaArrowUp />
        </div>
        {display.userInfo &&<Hero name = {props.name} desg = {props.visualresumedata.data.personalInformation.designation} 
          username = {props.username} profile = {props.visualresumedata.data.profileSummaryInformation}
          bg = {props.bg} font = {props.font} name1 = {name.userInfo}/>}
        <Nav bg = {props.bg} font = {props.font} display = {display} name = {name}/>
        {display.competenciesInfo &&<Competencies comp = {props.visualresumedata.data.competenciesInformation} bg = {props.bg} font = {props.font} name = {name.competenciesInfo}/>}
        {display.techSkillsInfo && <Skills  skills = {props.visualresumedata.data.techSkillsInformation} bg = {props.bg} font = {props.font} name = {name.techSkillsInfo} />}
        {display.toolSkillsInfo && <Skills  skills = {props.visualresumedata.data.toolSkillsInformation} bg = {props.bg} font = {props.font} name = {name.toolSkillsInfo} />}
        {display.progSkillsInfo && <Skills  skills = {props.visualresumedata.data.progSkillsInformation} bg = {props.bg} font = {props.font} name = {name.progSkillsInfo} />}
        {display.softSkillsInfo && <Skills  skills = {props.visualresumedata.data.softSkillsInformation} bg = {props.bg} font = {props.font} name = {name.softSkillsInfo} />}
        {display.educationInfo && <Education  education = {props.visualresumedata.data.educationInformation} bg = {props.bg} font = {props.font} name = {name.educationInfo} />}
        {display.workexpInfo && <WorkExp  workexp = {props.visualresumedata.data.workexpInformation} bg = {props.bg} font = {props.font} name = {name.workexpInfo} />}
        {display.projectsInfo && <Projects  projects = {props.visualresumedata.data.projectsInformation} bg = {props.bg} font = {props.font} name = {name.projectsInfo} />}
        {(display.hobbiesInfo || display.areaOfIntrestInfo) && <Hobbies  hobbies = {props.visualresumedata.data.hobbiesInformation} hobbiesDisplay = {display.hobbiesInfo} 
                                                               area = {props.visualresumedata.data.areaOfIntrestInformation} areaDisplay = {display.areaOfIntrestInfo}
                                                               bg = {props.bg} font = {props.font} name = {name.hobbiesInfo} />}
        {(display.certificationInfo || display.achievmentsInfo) && <Resume  cert = {props.visualresumedata.data.certificationInformation} certDisplay = {display.certificationInfo} 
                                                               a = {props.visualresumedata.data.achievmentsInformation} aDisplay = {display.achievmentsInfo}
                                                               bg = {props.bg} font = {props.font} name = {name.certificationInfo} />}
        {display.publicationInfo && <Publication  pub = {props.visualresumedata.data.publicationInformation} bg = {props.bg} font = {props.font} name = {name.publicationInfo} />}
        {display.personalInfo && <Contact  username = {props.username} personal = {props.visualresumedata.data.personalInformation} bg = {props.bg} font = {props.font} name = {name.personalInfo}/>}
      </div>
       
    </React.Fragment>
    
  )
}

export default Profile;