import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const AreaOfIntrestInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumepro = props.visualresumepro;
  const next = props.next;
  const back = props.back;
  const c = "areaOfIntrestInfoDisplay";
  
  const [list, setList] = useState(visualresumepro.areaOfIntrestInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumepro;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.areaOfIntrestInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumepro;
    arr.push({
        category: "engineering",
        stream: "ME",
        subject: "Heat Transfer"})
    
    setList(arr);
    visualresumeCopy.areaOfIntrestInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Area Of Intrest {i+1}</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("subject", i)}
            defaultValue = {l.subject}>
          </input>
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
  
  const handleChange = (n, idx) => e => {
      let visualresumeCopy = visualresumepro;
      visualresumeCopy.areaOfIntrestInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumepro;
    visualresumeCopy.areaOfIntrestInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Area Of Intrest</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumepro.areaOfIntrestInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Area of Intrest</Button>
  </div>
  )
}

export default AreaOfIntrestInfo;