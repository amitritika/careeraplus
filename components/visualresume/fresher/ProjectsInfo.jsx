import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';

const ProjectsInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "projectsInfoDisplay";
  
  const [list, setList] = useState(visualresume.projectInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.projectInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.push({title: `Project ${arr.length + 1}`,
             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
             
             })
    
    setList(arr);
    visualresumeCopy.projectInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showProjects = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Project {i+1} Title</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("title", i)}
            defaultValue = {l.title}>
          </input>
          <label className="lead">Project {i+1} Description</label>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            defaultValue={l.desc}
            placeholder="Description of Project"
            onChange={handleChangeQuill(i)}
        />
          <Button className = "btn btn-sm btn-danger mt-2" onClick = {()=> handleDelete(i)}>Delete</Button>
        </div>
      
       )
    })
      )
  }
  
  const handleNext = () => {
    let arr = visualresume.layout.list;
    let index = arr.findIndex(k => k== c);
    if (index !== -1 ) {
      if(index !== arr.length-1){
       next(c, arr[index+1]);
      } else{
        next("layoutInfoDisplay", c);
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
  
  const handleChange = (n, idx) => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.projectInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeQuill = (idx) => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.projectInformation.value[idx]["desc"] = e;
      vr(visualresumeCopy);
    };
  
  
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.projectInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Projects</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={props.visualresume.projectInformation.title}
        onChange= {handleTitle}>
      </input>
      {showProjects()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Projects</Button>
  </div>
  )
}

export default ProjectsInfo;