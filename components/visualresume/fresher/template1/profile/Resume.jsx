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
      props.project.value.map((c, i)=>{
        return (
          <div className = "fresher-template1-resume-project" style = {{top: `${secTop1()[i]}`}} data-aos="fade-up">
              <div className = "u-bullet-right" style = {{backgroundColor: `${props.bg}`}}>

              </div>
              <div className = "u-heading2" style = {{color: `${props.bg}`}}>
                {c.title}
              </div>
              <div className = "u-heading3" style = {{color: `${props.font}`}}>
                {renderHTML(c.desc)}
              </div>
            </div>
         )
        })
    )
    
  }
  
  const trainingShow = () => {
    return(
      props.training.value.map((c, i)=>{
        return (
          <div className = "fresher-template1-resume-project" style = {{top: `${secTop2()[i]}`}} data-aos="fade-up">
              <div className = "u-bullet-right" style = {{backgroundColor: `${props.bg}`}}>

              </div>
              <div className = "u-heading2" style = {{color: `${props.bg}`}}>
                {c.org} - <span style = {{color: `${props.font}`}}>{c.startDate} - {c.endDate}</span>
              </div>
              <div className = "u-heading3" style = {{color: `${props.font}`}}>
                {renderHTML(c.desc)}
              </div>
            </div>
         )
        })
    )
    
  }
  
  return (
    <Element name = "resume" className = "fresher-template1-resume">
      <Heading name = "Resume" bg = {props.bg} font = {props.font} />
      
      
      <div className = "row-v">
        <div className = "col-1-of-2">
          <div className = "u-heading1 u-margin-left-small u-margin-bottom-small" style = {{color: `${props.bg}`}}>{props.project.title}</div>
          <div className = "fresher-template1-resume-vl1" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight1()}`}}></div>
          <div style = {{position: `relative`}}>
            {projectShow()}
          </div>
        </div>
        <div className = "col-1-of-2">
          <div className = "u-heading1 u-margin-left-small u-margin-bottom-small">{props.training.title}</div>
          <div className = "fresher-template1-resume-vl2" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight2()}`}}></div>
          <div style = {{position: `relative`}}>
            {trainingShow()}
          </div>
        </div>
      </div>
      
      
    </Element>
  )
}

export default Resume;