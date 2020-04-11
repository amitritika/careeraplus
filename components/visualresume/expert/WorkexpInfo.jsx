import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';

const WorkexpInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "workexpInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.workexpInformation.value);
  
  const handleDelete = (idx) => {
    let arr = list;
    
    if(confirm("Do You Want to Delete This Work Experience!!") == true){
      arr.splice(idx, 1);
    }
    
    setList(arr);
    let visualresumeCopy = visualresumeexp
    visualresumeCopy.workexpInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const handleAdd = () =>{
    let obj = {
      org: "",
      designation: "",
      startDate: "",
      endDate: "Present",
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     }
    
    let arr = list;
    arr.push(obj);
    setList(arr);
    let visualresumeCopy = visualresumeexp
    visualresumeCopy.workexpInformation = arr;
    vr(visualresumeCopy);
  }
  
  const showWorkexp = () => {
    return(
    list.map((l, i)=> {
      return(
      <div className = "form-group mt-2" key = {i}>
        <Row>
          <Col xs = "12">
            <label className="lead">Organisation</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.org}
              onChange= {handleChange(i, "org")}>
            </input>
          </Col>
          <Col xs = "12">
            <label className="lead">Designation</label>
            <input 
              type = "text"
              className="form-control"
              defaultValue={l.designation}
              onChange= {handleChange(i, "designation")}>
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
            <label className="lead">Roles & Responsiblities</label>
            <ReactQuill
                modules={QuillModules}
                formats={QuillFormats}
                defaultValue={l.role}
                placeholder="Description of Roles & Responsiblities"
                onChange={handleChangeQuill(i, "role")}
            />
          </Col>
          <Col xs= "6">
            <Button className = "btn btn-lg btn-danger mt-2" onClick = {()=> handleDelete(i)}>Delete</Button>
          </Col>
        </Row>
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
  
  const handleChange = (idx, n) => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.workexpInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeQuill = (idx, n) => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.workexpInformation.value[idx][n] = e;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.workexpInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Work Experience</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.workexpInformation.title}
        onChange= {handleTitle}>
      </input>
           {showWorkexp()}

    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Work Exp</Button>
  </div>
  )
}

export default WorkexpInfo;