import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModulesShort, QuillFormatsShort } from '../../../helpers/quill';
import { useState, useEffect, useRef } from 'react';

const ProfileSummaryInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "profileSummaryInfoDisplay";
  
  
  const handleNext = () => {
    let arr = visualresume.layout.list;
    let index = arr.findIndex(k => k== c);
    if (index !== -1 ) {
      if(index !== arr.length-1){
       next(c, arr[index+1]);
      } 
    }
  }
  const handleBack =() =>{
    let arr = visualresume.layout.list;
    let index = arr.findIndex(k => k== c);
    if(index !== -1){
      if(index !== 0){
        next(c, arr[index-1]);
      }else{
        next(c, "layoutInfoDisplay");
      }
    }
  }
  
  const handleChange = e => {
      let visualresumeCopy = visualresume;
      
      visualresumeCopy.pesrsonalInformation.aboutMe = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.pesrsonalInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
           
    <div className="form-group">
      
      <label className="lead">Profile Summary</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={props.visualresume.pesrsonalInformation.title}
        onChange= {handleTitle}>
      </input>
      <label className="lead">About Me</label>
      <textarea
        className="form-control"
        defaultValue={props.visualresume.pesrsonalInformation.aboutMe}
        onChange= {handleChange}>
      </textarea>
      
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
      </div>
  </div>
  )
}

export default ProfileSummaryInfo;