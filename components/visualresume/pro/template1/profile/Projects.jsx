import { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import Heading from "./Heading";
const Resume = (props) => {
  
  const vlHeight1 = () => {
    let vl = 0;
    let inc = 12;
    
    props.project.value.map((c, i)=> {
    
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const vlHeight2 = () => {
    let vl = 0;
    let inc = 12;
    
    props.training.value.map((c, i)=> {
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const secTop1 = () => {
    let arr = [];
    let inc = 15;
    let vl = - (parseInt(vlHeight1()));
    props.project.value.map((c, i)=> {
      
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
    });
    
    return arr;
  }
  
  const secTop2 = () => {
    let arr = [];
    let inc = 15;
    let vl = - (parseInt(vlHeight2()));
    props.training.value.map((c, i)=> {
      
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
    });
    
    return arr;
  }
  
  
  const projectShow = () => {
    return(
      props.projects.value.map((c, i)=>{
        return (
          <div className = "pro-template1-projects-list" data-aos="fade-up">
            <div className = "u-heading2" style = {{color: `${props.bg}`}}>
              {c.title}{c.date.optional && <span className = "pro-template1-projects-list__date" style = {{color: `${props.font}`}}>- {c.date.startDate} - {c.date.endDate}</span>}
            </div>
          {c.client.optional && <div className = "pro-template1-projects-list__client u-heading2" style = {{color: `${props.bg}`}}>
             {c.client.value}{c.designation.optional && <span className = "pro-template1-projects-list__client__desg" style = {{color: `${props.font}`}}>- {c.designation.value}</span>}
            </div>}
            <div className = "pro-template1-projects-list__desc" style = {{color: `${props.font}`}}>
              {c.desc}
            </div>
          </div>
         )
        })
    )
    
  }
  return (
    <Element name = {props.name} className = "pro-template1-projects">
      <Heading name = {props.projects.title} bg = {props.bg} font = {props.font} />
      
      {projectShow()}
    </Element>
  )
}

export default Resume;