import Nav from  "./profile/Nav";
import Hero from "./profile/Hero";
import Skills from "./profile/Skills";
import Education from "./profile/Education";
import Resume from "./profile/Resume";
import Hobbies from "./profile/Hobbies";
import Contact from "./profile/Contact";
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import {FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Profile = (props) => {
  
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState("none");
  const [fade, setFade] = useState("move-to-top");

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
      
      <div className = "fresher-template1-main">
        <div className = {fade} style = {{display: `${dis}`}} onClick = {()=>scroll.scrollToTop()}>
          <FaArrowUp />
        </div>
        <Hero name = {props.name} desg = {props.visualresumedata.data.pesrsonalInformation.designation} 
          username = {props.username} about = {props.visualresumedata.data.pesrsonalInformation.aboutMe}
          bg = {props.bg} font = {props.font}/>
        <Nav bg = {props.bg} font = {props.font}/>
        <Skills  skills = {props.visualresumedata.data.skills} bg = {props.bg} font = {props.font}/>
        <Education  education = {props.visualresumedata.data.educationalInformation} bg = {props.bg} font = {props.font}/>
        <Resume  project = {props.visualresumedata.data.projectInformation}
          training = {props.visualresumedata.data.trainingInformation}
          bg = {props.bg} font = {props.font}/>
        
        <Hobbies  hobbies = {props.visualresumedata.data.hobbies}
          area = {props.visualresumedata.data.areaOfIntrest}
          extra = {props.visualresumedata.data.extraCurricular}
          bg = {props.bg} font = {props.font}/>
        
        <Contact  username = {props.username}
          personal = {props.visualresumedata.data.pesrsonalInformation}
          bg = {props.bg} font = {props.font}/>

      </div>
       
    </React.Fragment>
    
  )
}

export default Profile;