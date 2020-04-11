import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const ProgSkillsInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "progSkillsInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.progSkillsInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.progSkillsInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.push({value: `Skill ${arr.length + 1}`,
             rating: "4"})
    
    setList(arr);
    visualresumeCopy.progSkillsInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Skill {i+1} Name</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("value", i)}
            defaultValue = {l.value}>
          </input>
          <label className="lead">Rating out of 5</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("rating", i)}
            defaultValue = {l.rating}>
          </input>
          <Button className = "btn btn-sm btn-danger" onClick = {()=> handleDelete(i)}>Delete</Button>
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
      visualresumeCopy.progSkillsInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.progSkillsInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Programming Skills</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.progSkillsInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Skills</Button>
  </div>
  )
}

export default ProgSkillsInfo;