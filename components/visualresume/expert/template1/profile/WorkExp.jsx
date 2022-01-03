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
  
  const roleShow = (role) => {
    return(
      role.map((r, i) => {
        return(
          <div>
            {renderHTML(r)}
          </div>
        )
      })
    )
  }
  
  const projectShow = () => {
    return(
      props.workexp.value.map((c, i)=>{
        return (
          <div className = "pro-template1-workexp-list" data-aos="fade-up">
            <div className = "u-heading2" style = {{color: `${props.bg}`}}>
              {c.org} - {c.designation}
            </div>
            <div className = "pro-template1-workexp-list__date u-heading2" style = {{color: `${props.bg}`}}>
              {c.startDate} - {c.endDate}
            </div>
            <div className = "pro-template1-workexp-list__role" style = {{color: `${props.font}`}}>
              {roleShow(c.role)}
            </div>
          </div>
         )
        })
    )
    
  }
  return (
    <Element name = {props.name} className = "pro-template1-workexp">
      <Heading name = {props.workexp.title} bg = {props.bg} font = {props.font} />
      
      {projectShow()}
    </Element>
  )
}

export default Resume;