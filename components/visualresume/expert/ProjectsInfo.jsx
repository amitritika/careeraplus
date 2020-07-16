import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';

const ProjectsInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "projectsInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.projectsInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.projectsInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.push({title: `Project ${arr.length + 1}`,
             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
             designation: {optional: arr[0].designation.optional, value: "Engineer III"},
             client: {optional: arr[0].client.optional, value: "A1B1 Pvt Ltd"},
             date: {optional: arr[0].client.optional, startDate: "Dec 2019", endDate: "Present"}
             })
    
    setList(arr);
    visualresumeCopy.projectsInformation.value = arr;
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
          <label className="lead">Project {i+1} Designation</label>
          <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {l.designation.optional}
            onChange = {handleChangeCheck("designation", i)} ></input>
          {l.designation.optional && <input 
            type = "text"
            className="form-control"
            onChange= {handleChangeOptional("designation", "value", i)}
            defaultValue = {l.designation.value}>
          </input>}
          <label className="lead">Project {i+1} Client</label>
          <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {l.client.optional}
            onChange = {handleChangeCheck("client", i)} ></input>
          {l.client.optional && <input 
            type = "text"
            className="form-control"
            onChange= {handleChangeOptional("client", "value" ,i)}
            defaultValue = {l.client.value}>
          </input>}
          <label className="lead">Project {i+1} Duration</label>
          <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {l.date.optional}
            onChange = {handleChangeCheck("date", i)} ></input>
          {l.date.optional && 
            <Row>
              <Col xs = "6">
                <label className="lead">Project {i+1} Start Date</label>
                <input 
                  type = "text"
                  className="form-control"
                  onChange= {handleChangeOptional("date", "startDate", i)}
                  defaultValue = {l.date.startDate}>
                </input>
              </Col>
              <Col xs ="6">
                <label className="lead">Project {i+1} End Date</label>
                  <input 
                  type = "text"
                  className="form-control"
                  onChange= {handleChangeOptional("date", "endDate",  i)}
                  defaultValue = {l.date.endDate}>
                </input>
              </Col>
            </Row>
           }
          <Button className = "btn btn-sm btn-danger mt-2" onClick = {()=> handleDelete(i)}>Delete</Button>
        </div>
      
       )
    })
      )
  }
  
  const handleNext = () => {
    let arr = visualresumeexp.layout.list;
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
    let arr = visualresumeexp.layout.list;
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
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.projectsInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeQuill = (idx) => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.projectsInformation.value[idx]["desc"] = e;
      vr(visualresumeCopy);
    };
  
  const handleChangeCheck = (n, idx) => e => {
      let visualresumeCopy = visualresumeexp;
      if(e.target.checked){
        visualresumeCopy.projectsInformation.value[idx][n]["optional"] = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.projectsInformation.value[idx][n]["optional"] = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleChangeOptional = (n, v, idx) => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.projectsInformation.value[idx][n][v] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.projectsInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Projects</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.projectsInformation.title}
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