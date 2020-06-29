import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModulesShort, QuillFormatsShort } from '../../../helpers/quill';
import { useState, useEffect, useRef } from 'react';

const ProfileSummaryInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumepro = props.visualresumepro;
  const next = props.next;
  const back = props.back;
  const c = "profileSummaryInfoDisplay";
  const [list, setList] = useState(visualresumepro.profileSummaryInformation.value);
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumepro;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.profileSummaryInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumepro;
    arr.push("Type Something Awesome")
    
    setList(arr);
    visualresumeCopy.profileSummaryInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  
  const showProfile = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
         <ReactQuill
          className = "quill-short"
          modules={QuillModulesShort}
          formats={QuillFormatsShort}
          defaultValue={l}
          placeholder="Description of Profile"
          onChange={handleChange(i)}
          />
          <Button className = "btn btn-sm btn-danger" onClick = {()=> handleDelete(i)}>Delete</Button>
        </div>
      
       )
    })
      )
  }
  
  const handleNext = () => {
    let arr = visualresumepro.layout.list;
    let index = arr.findIndex(k => k== c);
    if (index !== -1 ) {
      if(index !== arr.length-1){
       next(c, arr[index+1]);
      } 
    }
  }
  const handleBack =() =>{
    let arr = visualresumepro.layout.list;
    let index = arr.findIndex(k => k== c);
    if(index !== -1){
      if(index !== 0){
        next(c, arr[index-1]);
      }else{
        next(c, "layoutInfoDisplay");
      }
    }
  }
  
  const handleChange = i => e => {
      let visualresumeCopy = visualresumepro;
      visualresumeCopy.profileSummaryInformation.value[i] = e;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumepro;
    visualresumeCopy.profileSummaryInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
           
    <div className="form-group">
      
      <label className="lead">Profile Summary</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumepro.profileSummaryInformation.title}
        onChange= {handleTitle}>
      </input>
      {showProfile()}
      
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Points</Button>
      </div>
  </div>
  )
}

export default ProfileSummaryInfo;