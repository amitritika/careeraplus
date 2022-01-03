import { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import Heading from "./Heading";
import {hobbiesListIcon, iconList, hobbiesList} from "../../../../../helpers/visualresume/fresher"
const Hobbies = (props) => {
  
 const vlHeight1 = () => {
    let vl = 0;
    let inc = 5;
    
    props.extra.value.map((c, i)=> {
    
        vl = vl + inc;
      
    })
    
    return vl.toString() + "rem";
  }
  
  const secTop1 = () => {
    let arr = [];
    let inc = 5;
    let vl = 0;
    props.extra.value.map((c, i)=> {
      
        arr.push(vl.toString() + "rem");
        vl = vl + inc;
    });
    
    return arr;
  }

  
  const extraShow = () => {
    return(
      props.extra.value.map((c, i)=>{
        return (
          <div className = "fresher-template1-hobbies-extra__point" style = {{top: `${secTop1()[i]}`}}>
          <div className = "fresher-template1-hobbies-extra__point-bullet" style = {{backgroundColor: `${props.bg}`}}>
            
          </div>
          <div className = "fresher-template1-hobbies-extra__point-text" style = {{color: `${props.font}`}}>
            {c}
          </div>
        </div>
         )
        })
    )
    
  }
  
  const hobbiesShow = () => {
    return(
      props.hobbies.value.map((c, i)=>{
        let Icon = hobbiesListIcon[c]
        return (
          <div className = "col-1-of-3">
              <div className = "fresher-template1-hobbies-icon" style = {{backgroundColor: `${props.bg}`}}>
                <i className = {Icon} ></i>
                
              </div>
              <div className = "u-heading2 u-center-text">
                {c}
              </div>
           </div>
         )
        })
    )
    
  }
  
  return (
    <Element name = "hobbies" className = "fresher-template1-hobbies">
      <Heading name = "Area of Intrests" bg = {props.bg} font = {props.font} />
      
      
      <div className = "row-v" data-aos="fade-up">
        <div className = "col-1-of-2">
          <div className = "u-heading1 u-center-text u-margin-bottom-small">{props.hobbies.title}</div>
          <div className = "row">
            {hobbiesShow()}
          </div>
        </div>
        <div className = "col-1-of-2">
          <div className = "u-heading1 u-center-text u-margin-bottom-small">{props.area.title}</div>
          <div className = "row">
            <div className = "col-1-of-3">
              <div className = "fresher-template1-hobbies-icon" style = {{backgroundColor: `${props.bg}`}}>
                <i className = {iconList[props.area.area1Topic]}></i>
              </div>
              <div className = "u-heading2 u-center-text">
                {props.area.area1Topic}
              </div>
            </div>
            <div className = "col-1-of-3">
              <div className = "fresher-template1-hobbies-icon" style = {{backgroundColor: `${props.bg}`}}>
                <i className = {iconList[props.area.area2Topic]}></i>
              </div>
              <div className = "u-heading2 u-center-text">
                {props.area.area2Topic}
              </div>
            </div>
            <div className = "col-1-of-3">
              <div className = "fresher-template1-hobbies-icon" style = {{backgroundColor: `${props.bg}`}}>
                <i className = {iconList[props.area.area3Topic]}></i>
              </div>
              <div className = "u-heading2 u-center-text">
                {props.area.area3Topic}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = "fresher-template1-hobbies-extra" data-aos="fade-up">
        <div className = "u-center-text u-heading1">
          {props.extra.title}
        </div>
        <div style = {{height: `${vlHeight1()}`}}>
          {extraShow()}
        </div>
        
        
      </div>
      
    </Element>
  )
}

export default Hobbies;