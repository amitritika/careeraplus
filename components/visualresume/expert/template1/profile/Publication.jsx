import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import Heading from "./Heading";
const Education = (props) => {
  
  const vlHeight = () => {
    let vl = 0;
    let inc = 10;
    
    props.pub.value.map((c, i)=> {
      
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const secTop = () => {
    let arr = [];
    let inc = 13.5;
    let vl = - (parseInt(vlHeight()) + 3);
    props.pub.value.map((c, i)=> {
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
      
    });
    
    return arr;
  }
  
  const pubShow = () => {
    return (
      props.pub.value.map((c,i) => {
        
        if(i % 2 > 0.1) {
        return(
          <div className = "pro-template1-pub-1" style = {{top: `${secTop()[i]}`}} data-aos="fade-up">
            <div className = "u-bullet-right" style = {{backgroundColor: `${props.bg}`}}>

            </div>
            <div className = "u-heading1" style = {{color: `${props.bg}`}}>
              {props.pub.value[i].name}
            </div>
            <div className = "u-heading2" style = {{color: `${props.bg}`}}>
              {props.pub.value[i].title} - <span>{props.pub.value[i].year} </span>
            </div>
            <div className = "u-heading2" style = {{color: `${props.font}`}}>
               {props.pub.value[i].journal} - {props.pub.value[i].pages}
            </div>

          </div>
        
        )
        }else {
          return(
          <div className = "pro-template1-pub-2" style = {{top: `${secTop()[i]}`}} data-aos="fade-up">
            <div className = "u-bullet-left" style = {{backgroundColor: `${props.bg}`}}>

            </div>
            <div className = "u-heading1" style = {{color: `${props.bg}`}}>
              {props.pub.value[i].name}
            </div>
            <div className = "u-heading2" style = {{color: `${props.bg}`}}>
              {props.pub.value[i].title} - <span>{props.pub.value[i].year} </span>
            </div>
            <div className = "u-heading2" style = {{color: `${props.font}`}}>
               {props.pub.value[i].journal} - {props.pub.value[i].pages}
            </div>

          </div>
        
        )
        }
      })
    )
  }
  
  return (
    <Element name = {props.name} className = "pro-template1-pub">
      <Heading name = {props.pub.title} bg = {props.bg} font = {props.font} />
      <div className = "pro-template1-pub-vl" style = {{backgroundColor: `${props.bg}`, height: `${vlHeight()}`}}></div>
      
      <div style = {{position: `relative`}}>
       {pubShow()}
      </div>
      
    </Element>
  )
}

export default Education;