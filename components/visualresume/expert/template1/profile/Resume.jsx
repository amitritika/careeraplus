import { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import Heading from "./Heading";
const Resume = (props) => {
  
  const vlHeight1 = () => {
    let vl = 0;
    let inc = 5;
    
    props.cert.value.map((c, i)=> {
    
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const vlHeight2 = () => {
    let vl = 0;
    let inc = 5;
    
    props.a.value.map((c, i)=> {
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const secTop1 = () => {
    let arr = [];
    let inc = 5;
    let vl = - (parseInt(vlHeight1()));
    props.cert.value.map((c, i)=> {
      
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
    });
    
    return arr;
  }
  
  const secTop2 = () => {
    let arr = [];
    let inc = 5;
    let vl = - (parseInt(vlHeight2()));
    props.a.value.map((c, i)=> {
      
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
    });
    
    return arr;
  }
  
  const projectShow = () => {
    return(
      props.cert.value.map((c, i)=>{
        return (
          <div className = "pro-template1-resume-project" style = {{top: `${secTop1()[i]}`}} data-aos="fade-up">
              <div className = "u-bullet-right-small-1" style = {{backgroundColor: `${props.bg}`}}>

              </div>
              <div className = "u-heading3" style = {{color: `${props.font}`}}>
                {c}
              </div>
            </div>
         )
        })
    )
    
  }
  
  const trainingShow = () => {
    return(
      props.a.value.map((c, i)=>{
        return (
          <div className = "pro-template1-resume-project" style = {{top: `${secTop2()[i]}`}} data-aos="fade-up">
              <div className = "u-bullet-right-small-1" style = {{backgroundColor: `${props.bg}`}}>

              </div>
              <div className = "u-heading3" style = {{color: `${props.font}`}}>
                {c}
              </div>
            </div>
         )
        })
    )
    
  }
  
  return (
    <Element name = {props.name} className = "pro-template1-resume">
      <Heading name = "Awards & Certification" bg = {props.bg} font = {props.font} />
      
      
      <div className = "row-v">
        {props.certDisplay && <div className = "col-1-of-2">
          <div className = "u-heading1 u-margin-left-small u-margin-bottom-small" style = {{color: `${props.bg}`}}>{props.cert.title}</div>
          <div className = "pro-template1-resume-vl1" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight1()}`}}></div>
          <div style = {{position: `relative`}}>
            {projectShow()}
          </div>
        </div>}
        {props.aDisplay && <div className = "col-1-of-2">
          <div className = "u-heading1 u-margin-left-small u-margin-bottom-small">{props.a.title}</div>
          <div className = "pro-template1-resume-vl2" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight2()}`}}></div>
          <div style = {{position: `relative`}}>
            {trainingShow()}
          </div>
        </div>}
      </div>
      
      
    </Element>
  )
}

export default Resume;