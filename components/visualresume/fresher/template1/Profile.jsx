import Nav from  "./profile/Nav"
import Hero from "./profile/Hero";
import Skills from "./profile/Skills";
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Profile = (props) => {
  
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState("none");
  const [fade, setFade] = useState("move-to-top");

  useEffect(()=> {
    const onScroll = e => {
      
      if(e.target.documentElement.scrollTop > 100){
        console.log(e.target.documentElement.scrollTop);
        setDis("block");
        setFade("move-to-top u-fadeIn");
      }else{
        setFade("move-to-top u-fadeOut");
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
        <div className = {fade} style = {{display: `${dis}`}} onClick = {()=>scroll.scrollToTop()}><i className="fas fa-arrow-up"></i></div>
        <Hero />
        <Nav />
        <Skills />
      </div>
       
    </React.Fragment>
    
  )
}

export default Profile;