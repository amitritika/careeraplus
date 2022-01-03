import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import Heading from "./Heading";
const Education = (props) => {
  
  const vlHeight = () => {
    let vl = 0;
    let inc = 10;
    
    props.education.value.map((c, i)=> {
      if(c.optional){
        vl = vl + inc;
      }
    })
    
    return vl.toString() + "rem";
  }
  
  const secTop = () => {
    let arr = [];
    let inc = 13.5;
    let vl = - (parseInt(vlHeight()) + 3);
    props.education.value.map((c, i)=> {
      if(c.optional){
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
      }else{
        arr.push(vl.toString() + "rem");
      }
    });
    
    return arr;
  }
  
  return (
    <Element name = {props.name} className = "pro-template1-education">
      <Heading name = {props.education.title} bg = {props.bg} font = {props.font} />
      <div className = "pro-template1-education-vl" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight()}`}}></div>
      
      <div style = {{position: `relative`}}>
       {props.education.value[0].optional && <div className = "pro-template1-education-1" style = {{top: `${secTop()[0]}`}} data-aos="fade-up">
          <div className = "u-bullet-right" style = {{backgroundColor: `${props.bg}`}}>

          </div>
          <div className = "u-heading1" style = {{color: `${props.bg}`}}>
            {props.education.value[0].degree}
          </div>
          <div className = "u-heading2" style = {{color: `${props.bg}`}}>
            {props.education.value[0].college} - <span style = {{color: `${props.font}`}}>{props.education.value[0].year}</span>
          </div>
          <div className = "u-heading2" style = {{color: `${props.font}`}}>
             {props.education.value[0].cgpa}
          </div>

        </div>}

        {props.education.value[1].optional && <div className = "pro-template1-education-2" style = {{top: `${secTop()[1]}`}} data-aos="fade-up">
          <div className = "u-bullet-left" style = {{backgroundColor: `${props.bg}`}}>

          </div>
          <div className = "u-heading1" style = {{color: `${props.bg}`}}>
            {props.education.value[1].degree}
          </div>
          <div className = "u-heading2" style = {{color: `${props.bg}`}}>
            {props.education.value[1].college} - <span style = {{color: `${props.font}`}}>{props.education.value[1].year}</span>
          </div>
          <div className = "u-heading2" style = {{color: `${props.font}`}}>
             {props.education.value[1].cgpa}
          </div>
        </div>}

        {props.education.value[2].optional && <div className = "pro-template1-education-3" style = {{top: `${secTop()[2]}`}} data-aos="fade-up">
          <div className = "u-bullet-right" style = {{backgroundColor: `${props.bg}`}}>

          </div>
          <div className = "u-heading1" style = {{color: `${props.bg}`}}>
            {props.education.value[2].degree}
          </div>
          <div className = "u-heading2" style = {{color: `${props.bg}`}}>
            {props.education.value[2].college} - <span style = {{color: `${props.font}`}}>{props.education.value[2].year}</span>
          </div>
          <div className = "u-heading2" style = {{color: `${props.font}`}}>
             {props.education.value[2].cgpa}
          </div>
        </div>}
      </div>
      
    </Element>
  )
}

export default Education;