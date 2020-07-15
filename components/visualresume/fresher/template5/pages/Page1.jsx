import LeftBlock from "./LeftBlock"
import RightBlock from "./RightBlock"
import Block from "./Block"
import { useState, useEffect } from 'react';

const Page1 = (props) => {
  
  useEffect(()=>{
    let h = document.getElementById("left-block-page1");
    if(h.offsetHeight>1486){
      
      let visualresumeexpCopy = props.visualresumeexp;
      visualresumeexpCopy.layout.pages[2].blocks = [LeftBlock, RightBlock]
      
      props.vr(visualresumeexpCopy)
    }
  },[])
  
  
  let pages = props.pages
  const showBlocks = () => {
    return(
    
    pages[0].blocks.map((c, i)=>{
      let BlockComponent = c;
      let id = ""
      if (c== LeftBlock) {
        id = "left-block-" + "page1"
        return <BlockComponent block = {pages[0].left} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id} />;
      }
      else if (c == RightBlock) {
        id = "right-block-" + "page1"
        return <BlockComponent block = {pages[0].right} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id} />;
      }else{
        id = "block-" + "page1"
        return <BlockComponent block = {pages[0].block} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id} />;
      }
      
    })
      )
  }
  
  return(
    <React.Fragment>
      {showBlocks()}
    </React.Fragment>
  )
}

export default Page1