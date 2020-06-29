
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import Block from "./pages/Block"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';

const Resume = (props) => {


  //const pages = props.pages;
  let list = props.list
  const [margin, setMargin]= useState(60);
  const [values, setValues] = useState({
    visualresumeexp: props.visualresumeexp
  });
  
  const marginInc = (idx)=>{
    setMargin(margin + props.fac * 302*idx);
  }
  
  const leftBlockShow = () => {
    let height = (Math.floor(list.leftH/297)+1) * 297;
    if(height > 594){
      height = 594
    }
    
    return <LeftBlock id = "left-block" height = {height} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const rightBlockShow = () => {
    let height = (Math.floor(list.leftH/297)+1) * 297;
    if(height > 594){
      height = 594
    }
    return <RightBlock id = "right-block" height = {height} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const blockShow = () => {
    let top = (Math.floor(list.leftH/297)+1) * 297;
    let height = list.count * 297 - top;
    if(top + height > 594){
      if(top > 594){
        height = 0
      }else{
        height = 297
      }
    }
    return <Block id = "block" top = {top} height = {height} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
//   const showPages = () => {
//     let marginL = 60
//     return(

//     pages.map((p, i)=>{
//       const BlockComponent = p.name;
//       marginL = 60 + props.fac * 302*i;
//       let marginT = marginL.toString() + "px"
//       return (
//         <Col xs = "12" style = {{position: `absolute`, marginTop:  `${marginT}`}} key = {i}>
//           <BlockComponent visualresumeexp= {props.visualresumeexp} pages = {pages} fac = {props.fac} bg = {props.bg} font = {props.font} vr = {props.vr} />
//         </Col>
        
//       );
//     })
//       )
//   }
  
  return (
    <React.Fragment>
         {leftBlockShow()}
        {rightBlockShow()}
        {blockShow()}
    </React.Fragment>
    
  )
}

export default Resume;