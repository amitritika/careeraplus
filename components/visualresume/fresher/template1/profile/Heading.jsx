import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Heading = (props) => {
  
  
  
  
  return (
      <div className = "fresher-template1-heading" style = {{color: `${props.bg}`}}>
        {props.name}
        <div className = "fresher-template1-heading__bar" style = {{backgroundColor: `${props.bg}`}}></div>
        <div className = "fresher-template1-heading__bar--1" style = {{borderBottom: `.1rem solid ${props.font}`}}></div>
      </div>
  )
}

export default Heading;