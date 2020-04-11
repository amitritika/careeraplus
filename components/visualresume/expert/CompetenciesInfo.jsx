import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const CompetenciesInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "competenciesInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.competenciesInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.competenciesInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    
    arr.push(comp);
    setList(arr);
    setComp("");
    visualresumeCopy.competenciesInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showCompetencies = () => {
    return(
    list.map((l, i)=>{
      return (
        <div key = {i}>
          <Row className = "mt-2">
            <Col xs ="10">
              <a className = "btn btn-md btn-outline-primary w-75">{l}</a>
            </Col>
            <Col xs = "2">
              <Button className = "btn btn-sm btn-danger" onClick = {()=> handleDelete(i)}>Delete</Button>
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
        next("layoutInfoDisplay", c);
      }
    }
  }
  
  const handleChange = e => {
      let visualresumeCopy = visualresumeexp;
      setComp(e.target.value);
    };
  
  const handleKeyPress = e =>{
    if(e.charCode == 13){
      handleAdd();
      
    }
  }
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.competenciesInformation.value = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
           
    <div className="form-group">
      <label className="lead">Competencies</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.competenciesInformation.title}
        onChange= {handleTitle}>
      </input>
      <input 
        type = "text"
        className="form-control"
        onChange= {handleChange}
        onKeyPress = {handleKeyPress}
        value = {comp}>
      </input>
      <Button onClick = {handleAdd}>Add</Button>
     </div>
      {showCompetencies()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>

  </div>
  )
}

export default CompetenciesInfo;