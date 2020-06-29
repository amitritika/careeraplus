import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const TechSkillsInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "techSkillsInfoDisplay";
  
  const [list, setList] = useState(visualresume.skills.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.skills.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.push({value: `Skill ${arr.length + 1}`,
             rating: "4"})
    
    setList(arr);
    visualresumeCopy.skills.value = arr;
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
      visualresumeCopy.skills.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.skills.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  
  return(
  <div className= "container">
      <label className="lead">Technical Skills</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresume.skills.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Skills</Button>
  </div>
  )
}

export default TechSkillsInfo;