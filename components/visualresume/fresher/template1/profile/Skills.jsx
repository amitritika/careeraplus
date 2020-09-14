import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Skills = (props) => {
  
  
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState(1);
  const [wipe, setWipe] = useState("");
  
  useEffect(()=> {
    const onScroll = e => {
     let top = e.target.documentElement.scrollTop;
      let sec = document.querySelector(".fresher-template1-skills");
      let secPos = sec.getBoundingClientRect().top;
      let screenPosition = window.innerHeight/2.5;
      if(secPos < screenPosition){
        setDis("block");
        setWipe("fresher-template1-skills-bar__rating--bar u-wipeInLeft");
      }
     // console.log(e.target.documentElement.scrollTop);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
  return (
    <Element name = "skills" className = "fresher-template1-skills" >
      <div className = "fresher-template1-heading">
        Skills
        <div className = "fresher-template1-heading__bar"></div>
        <div className = "fresher-template1-heading__bar--1"></div>
      </div>
      
      <div className = "fresher-template1-skills__sec">
        <div className = "fresher-template1-skills-bar">
          <div className = "fresher-template1-skills-bar__text">
            Potoshop
          </div>
          <div className = "fresher-template1-skills-bar__bar">

          </div>
          <div className = "fresher-template1-skills-bar__rating" style = {{width: `60%`}}>
            <div className = {wipe}>

            </div>
          </div>
        </div>
      </div>
      
      
    </Element>
  )
}

export default Skills;