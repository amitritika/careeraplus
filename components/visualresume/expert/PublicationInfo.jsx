import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const PublicationInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "publicationInfoDisplay";
  
  const [list, setList] = useState(visualresumeexp.publicationInformation.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.publicationInformation.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresumeexp;
    arr.push({
        name: "Smith J",
        title: `Title for Paper ${arr.length +1}` ,
        year: "20XX",
        journal: `Journal Name for Paper ${arr.length +1}`,
        pages: ""})
    
    setList(arr);
    visualresumeCopy.publicationInformation.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
      return (
        <div className = "form-group mt-2" key = {i}>
          <label className="lead">Paper/Conference Presenter {i+1} Names</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("name", i)}
            defaultValue = {l.name}>
          </input>
          <label className="lead">Title</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("title", i)}
            defaultValue = {l.title}>
          </input>
          <label className="lead">Journal/Confrence Name</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("journal", i)}
            defaultValue = {l.journal}>
          </input>
          <label className="lead">Year of Publication/Presentation</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("year", i)}
            defaultValue = {l.year}>
          </input>
          <label className="lead">Page No. in Journal</label>
          <input 
            type = "text"
            className="form-control"
            onChange= {handleChange("pages", i)}
            defaultValue = {l.pages}>
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
      visualresumeCopy.publicationInformation.value[idx][n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresumeexp;
    visualresumeCopy.publicationInformation.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Publications Details Title</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresumeexp.publicationInformation.title}
        onChange= {handleTitle}>
      </input>
      {showSkills()}
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleAdd}>Add Publication</Button>
  </div>
  )
}

export default PublicationInfo;