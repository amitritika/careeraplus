import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';


const LayoutInfo = (props) => {
  
  const selected = "btn btn-lg btn-success w-75 mt-2";
  const unselected = "btn btn-lg btn-outline-primary w-75 mt-2";
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  
  const [values, setValues] = useState(visualresumeexp.layout.display);
  
  const [classes, setClasses] = useState(visualresumeexp.layout.classes);
  
 
  
  const sequence = ["userInfo",
    "personalInfo",
    "profileSummaryInfo",
    "competenciesInfo",
    "workexpInfo",
    "techSkillsInfo",
    "toolSkillsInfo",
    "progSkillsInfo",
    "softSkillsInfo",
    "projectsInfo",
    "educationInfo",
    "certificationInfo",
    "achievmentsInfo",
    "publicationInfo",
    "areaOfIntrestInfo",
    "hobbiesInfo"]
  
  const [list, setList] = useState(visualresumeexp.layout.list);
  
  const handleClick = (name) => {
    let dis = name + "Display";
    let classN = name + "Class";
    let arr = [];
    let obj = values
    let objClass = classes;
    if(values[name]){
      obj[name] = false;
      objClass[classN]= unselected
      
    }else{
      obj[name] = true;
      objClass[classN]= selected
      
    }
    
    sequence.map((q, i)=> {
      if(obj[q]){
        arr.push(q+"Display");
      }
    });
    setList(arr);
    setValues(obj);
    setClasses(objClass)
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.layout.list = arr;
    visualresumeCopy.layout.display = obj;
    visualresumeCopy.layout.classes = objClass;
    vr(visualresumeCopy);
  }
  
  return (
    
    <div className = "container mt-4">
      <Row>
        <Col xs ="12">
          <button className = {classes.userInfoClass}>User Information</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.personalInfoClass}>Personal Information</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.profileSummaryInfoClass}>Profile Summary</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.competenciesInfoClass}>Competencies</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.workexpInfoClass}>Work Experience</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.techSkillsInfoClass} onClick = {()=> handleClick("techSkillsInfo")}>Technical Skills</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.toolSkillsInfoClass} onClick = {()=> handleClick("toolSkillsInfo")}>Tools Skills</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.progSkillsInfoClass} onClick = {()=> handleClick("progSkillsInfo")}>Programming Skills</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.softSkillsInfoClass} onClick = {()=> handleClick("softSkillsInfo")}>Softs Skills</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.projectsInfoClass} onClick = {()=> handleClick("projectsInfo")}>Projects</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.educationInfoClass} onClick = {()=> handleClick("educationInfo")}>Education Details</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.certificationInfoClass} onClick = {()=> handleClick("certificationInfo")}>Certifications Details</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.achievmentsInfoClass} onClick = {()=> handleClick("achievmentsInfo")}>Awards & Achievements</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.publicationInfoClass} onClick = {()=> handleClick("publicationInfo")}>Publications</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.areaOfIntrestInfoClass} onClick = {()=> handleClick("areaOfIntrestInfo")}>Area of Intrest</button>
        </Col>
        <Col xs ="12">
          <button className = {classes.hobbiesInfoClass} onClick = {()=> handleClick("hobbiesInfo")}>Hobbies</button>
        </Col>
      </Row>
      <Button className = "btn alert mr-4 mt-2">Back</Button>
      <Button className = "btn alert mr-4 mt-2" onClick = {()=> next("layoutInfoDisplay", "userInfoDisplay")}>Next</Button>
    </div>
  
  
  )
  
}

export default LayoutInfo;