import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModulesShort, QuillFormatsShort } from '../../../helpers/quill';

const TrainingInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumepro = props.visualresumepro;
  const next = props.next;
  const back = props.back;
  const c = "workexpInfoDisplay";
  
  const [list, setList] = useState(visualresumepro.trainingInformation.value);
  
  const [toggle, setToggle] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
  
  
  
  const handleDelete = (idx) => {
    let arr = list;
    
    if(confirm("Do You Want to Delete This Training!!") == true){
      arr.splice(idx, 1);
    }
    
    
    let visualresumeproCopy = visualresumepro
    visualresumeproCopy.trainingInformation.value = arr;
    vr(visualresumeproCopy);
  }
  
  const handleAdd = () =>{
    let obj = {
      org: "Your Organization",
      type: "Internship",
      startDate: "Starting Date",
      endDate: "End Date",
      desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>"
     }
    
    let arr = list;
    arr.push(obj);
    
    let visualresumeproCopy = visualresumepro
    visualresumeproCopy.trainingInformation.value = arr;
    vr(visualresumeproCopy);
  }
  
  
  
  const showWorkexp = () => {
    return(
    list.map((l, i)=> {
      return(
      <div className = "form-group mt-2" key = {i}>
          <label className="lead">Training {i+1}</label>
          <Row>
          
          <Col xs = "12">
            <label className="lead">Training Type</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.type}
              onChange= {handleChange(i, "type")}>
            </input>
          </Col>
          <Col xs = "12">
            <label className="lead">Organization</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.org}
              onChange= {handleChange(i, "org")}>
            </input>
          </Col>
          <Col xs = "6">
            <label className="lead">Joining Date</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.startDate}
              onChange= {handleChange(i, "startDate")}>
            </input>
          </Col>
          <Col xs = "6">
            <label className="lead">Leaving Date</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.endDate}
              onChange= {handleChange(i, "endDate")}>
            </input>
          </Col>
          <Col xs = "12">
            <label className="lead">Description</label>
            <ReactQuill
                  className = "quill-short"
                  modules={QuillModulesShort}
                  formats={QuillFormatsShort}
                  defaultValue={l.desc}
                  placeholder="Description of Training"
                  onChange={handleChangeRole("desc", i)}
                  />
          </Col>
            <Button className = "btn btn-lg btn-danger mt-2" onClick = {()=> handleDelete(i)}>Delete</Button>
        </Row>
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
      } else{
        next("layoutInfoDisplay", c);
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
  
  const handleChange = (idx, n) => e => {
      let visualresumeproCopy = visualresumepro;
      visualresumeproCopy.trainingInformation.value[idx][n] = e.target.value;
      vr(visualresumeproCopy);
    };
  
  const handleChangeRole = (idx, i) => e => {
      let visualresumeproCopy = visualresumepro;
      visualresumeproCopy.trainingInformation.value[i].desc = e;
      vr(visualresumeproCopy);
    };
  
  const handleTitle = e => {
    let visualresumeproCopy = visualresumepro;
    visualresumeproCopy.trainingInformation.title = e.target.value;
    vr(visualresumeproCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Work Experience</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={props.visualresumepro.trainingInformation.title}
        onChange= {handleTitle}>
      </input>
           {showWorkexp()}

    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Work Exp</Button>
  </div>
  )
}

export default TrainingInfo;