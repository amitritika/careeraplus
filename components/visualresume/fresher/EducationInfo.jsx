import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const EducationInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "educationInfoDisplay";
  
  const [list, setList] = useState(visualresume.educationalInformation.value);
  
  const [comp, setComp] = useState("");
  
 const handleToggle = (i) => {
    let visualresumeCopy = visualresume
    
    if(visualresumeCopy.educationalInformation.value[i].toggle){
      
      visualresumeCopy.educationalInformation.value[i].toggle = false;
    }else{
      
      visualresumeCopy.educationalInformation.value[i].toggle = true;
      
    }
    
    vr(visualresumeCopy);
    
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.push({value: `Skill ${arr.length + 1}`,
             rating: "4"})
    
    setList(arr);
    visualresumeCopy.educationalInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          {(i==0) && <label className="lead">Latest Education</label>}
          {(i!==0) && <label className="lead">Next Education</label>}
          {(i>1) && <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {l.optional}
            onChange = {handleChangeCheck(i)} ></input>}
          {l.optional && <div>
            <label className="lead">Degree</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("degree",i)}
              defaultValue = {l.degree}>
            </input>
            <label className="lead">Institution</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("college", i)}
              defaultValue = {l.college}>
            </input>
            <Row>
              <Col xs = "6">
                <label className="lead">Passout Year</label>
                <input 
                  type = "text"
                  className="form-control"
                  onChange= {handleChange("year", i)}
                  defaultValue = {l.year}>
                </input>
              </Col>
              <Col xs = "6">
                 <label className="lead">CGPA/Percentage/Grade</label>
                <input 
                  type = "text"
                  className="form-control"
                  onChange= {handleChange("cgpa", i)}
                  defaultValue = {l.cgpa}>
                </input>
              </Col>
              </Row>
          </div>}
          
          
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
      }else{
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
      visualresumeCopy.educationalInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeCheck = (idx) => e => {
      let visualresumeCopy = visualresume;
      if(e.target.checked){
        visualresumeCopy.educationalInformation.value[idx]["optional"] = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.educationalInformation.value[idx]["optional"] = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.educationalInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Education</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresume.educationalInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
  </div>
  )
}

export default EducationInfo;