import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Heading from "./Heading";
const Skills = (props) => {
  
  
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState(1);
  const [wipe, setWipe] = useState("");
  
  const heightFn = () => {
    let skillCount = props.skills.value.length;
    let h = 0;
    
    if(skillCount % 2 > 0.1) {
      h = (Math.floor(skillCount /2) + 1 ) * 10;
    }else {
      h = (skillCount /2) * 10;
    }
    
    return h.toString() + "rem";
  }
  
  
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
  }, []);
  
  const showSkills = () => {
    let skillCount = props.skills.value.length;
    return (
      props.skills.value.map ((s, i)=> {
        let rat1 = (parseInt(props.skills.value[i].rating)/5)*100;
          if (rat1 > 100) {
            rat1 = 100;
          }
          rat1 = rat1.toString() + "%";
        
        return (
          <div className = "col-lg-6">
             <div className = "fresher-template1-skills-bar">
              <div className = "fresher-template1-skills-bar__text">
                {props.skills.value[i].value}
              </div>
              <div className = "fresher-template1-skills-bar__bar" style = {{backgroundColor: `${props.font}`}}>

              </div>
              <div className = "fresher-template1-skills-bar__rating" style = {{width: `${rat1}`}}>
                <div className = {wipe} style = {{backgroundColor: `${props.bg}`}}>

                </div>
              </div>
            </div>
          </div>
        
        )
        
      })
    )
  }
  
  return (
    <Element name = "skills" className = "fresher-template1-skills" >
      <Heading name = {props.skills.title} bg = {props.bg} font = {props.font} />
      <div className= "container">
        <div className = "fresher-template1-skills__sec row" style = {{height: `${heightFn()}`}}>

          {showSkills()}
        </div>
      </div>
      
      
      
    </Element>
  )
}

export default Skills;