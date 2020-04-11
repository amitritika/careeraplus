import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const EducationInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "educationInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.educationInformation.value);
  
  const [comp, setComp] = useState("");
  
 
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.push({value: `Skill ${arr.length + 1}`,
             rating: "4"})
    
    setList(arr);
    visualresumeCopy.educationInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Latest Education</label>
          <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {l.optional}
            onChange = {handleChangeCheck(i)} ></input>
          {l.optional && <div>
            <label className="lead">Degree</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("value", "degree",i)}
              defaultValue = {l.degree}>
            </input>
            <label className="lead">Institution</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("rating", "college", i)}
              defaultValue = {l.college}>
            </input>
            <label className="lead">Passout Year</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("rating", "year", i)}
              defaultValue = {l.year}>
            </input>
            <label className="lead">CGPA/Percentage/Grade</label>
            <input 
              type = "text"
              className="form-control"
              onChange= {handleChange("rating", "cgpa", i)}
              defaultValue = {l.cgpa}>
            </input>
          </div>}
          
          
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
      }else{
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
      visualresumeCopy.educationInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeCheck = (idx) => e => {
      let visualresumeCopy = visualresumeexp;
      if(e.target.checked){
        visualresumeCopy.educationInformation.value[idx]["optional"] = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.educationInformation.value[idx]["optional"] = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.educationInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Education</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.educationInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
  </div>
  )
}

export default EducationInfo;