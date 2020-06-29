
import LeftBlock from "./pages/LeftBlock"
import RightBlock from "./pages/RightBlock"
import Block from "./pages/Block"
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';

const Resume = (props) => {


  //const pages = props.pages;
  let list = props.list
  const [blockDis, setBlockDis]= useState(false);
  const [values, setValues] = useState({
    visualresumeexp: props.visualresumeexp
  });
  let dis = false;
  
  
  const leftBlockShow = () => {
    let height = (Math.floor(list.leftH/297)+1) * 297;
    if(list.countL < list.countR){
      dis = true;
    }
    
    return <LeftBlock id = "left-block" height = {height} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const rightBlockShow = () => {
    let height = (Math.floor(list.leftH/297)+1) * 297;
    
    return <RightBlock id = "right-block" height = {height} fac = {props.fac} bg = {props.bg} font = {props.font}/>
  }
  
  const blockShow = () => {
    let top = (Math.floor(list.leftH/297)+1) * 297;
    let height = list.countR * 297 - top;
    
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
        {dis && blockShow()}
    </React.Fragment>
    
  )
}

export default Resume;