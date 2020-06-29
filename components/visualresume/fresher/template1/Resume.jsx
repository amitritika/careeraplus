
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';

const Resume = (props) => {


  const leftBlockShow = () => {
    
    return <LeftBlock id = "left-block" height = {297} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const rightBlockShow = () => {
    
    return <RightBlock id = "right-block" height = {297} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }

  return (
    <React.Fragment>
         {leftBlockShow()}
        {rightBlockShow()}
    </React.Fragment>
    
  )
}

export default Resume;