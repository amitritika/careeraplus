import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const HobbiesInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "hobbiesInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.hobbiesInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.hobbiesInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.push(`Hobby ${arr.length+1}`)
    
    setList(arr);
    visualresumeCopy.hobbiesInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Hobby {i+1}</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange(i)}
            defaultValue = {l}>
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
  
  const handleChange = (idx) => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.hobbiesInformation.value[idx] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.hobbiesInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Hobbies</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.hobbiesInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Hobby</Button>
  </div>
  )
}

export default HobbiesInfo;