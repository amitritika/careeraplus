import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Heading from "./Heading";
const Skills = (props) => {
  
  
  const [scrollTop, setScrollTop] = useState(0);
  const [dis, setDis] = useState(1);
  const [wipe, setWipe] = useState("");
  
  const heightFn = () => {
    let compCount = props.comp.value.length;
    let h = 0;
    
    h = compCount * 5;
    
    return h.toString() + "rem";
  }
  
  const secTop = () => {
    let arr = [];
    let inc = 5;
    let vl = - (parseInt(heightFn()) + 1);
    props.comp.value.map((c, i)=> {
      arr.push(vl.toString() + "rem");
      vl = vl + inc;
    });
    
    return arr;
  }
  
  
  useEffect(()=> {
    const onScroll = e => {
     let top = e.target.documentElement.scrollTop;
      let sec = document.querySelector(".pro-template1-skills");
      let secPos = sec.getBoundingClientRect().top;
      let screenPosition = window.innerHeight/2.5;
      if(secPos < screenPosition){
        setDis("block");
        setWipe("pro-template1-skills-bar__rating--bar u-wipeInLeft");
      }
     // console.log(e.target.documentElement.scrollTop);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const showComp = () => {
    
    return (
      props.comp.value.map ((s, i)=> {
        if(i % 2 > 0.1){
          return (

            <div  className = "pro-template1-comp__l" style = {{top: `${secTop()[i]}`, backgroundColor: `${props.bg}`}}  data-aos="fade-left">
              {props.comp.value[i]}
            </div>

          )
        }else{
          return (

            <div  className = "pro-template1-comp__r" style = {{top: `${secTop()[i]}`, backgroundColor: `${props.bg}`}}  data-aos="fade-right">
              {props.comp.value[i]}
            </div>

          )
        }
          
        
      })
    )
  }
  
  return (
    <Element name = {props.name} className = "pro-template1-skills" >
      <Heading name = {props.comp.title} bg = {props.bg} font = {props.font} />
      <div className = "pro-template1-comp-vl" style = {{backgroundColor: `${props.bg}`, height: `${heightFn()}`}}></div>
      <div style = {{position: "relative"}}>
        {showComp()}
      </div>
      
      
      
    </Element>
  )
}

export default Skills;