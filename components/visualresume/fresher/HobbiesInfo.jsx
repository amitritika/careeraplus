import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import { hobbies, hobbiesList } from "../../../helpers/visualresume/expert"

const HobbiesInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "hobbiesInfoDisplay";
  
  const [list, setList] = useState(props.visualresume.hobbies.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.hobbies.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.push("Running")
    
    setList(arr);
    visualresumeCopy.hobbies.value = arr;
    vr(visualresumeCopy);
  }
  
  const showSkills = () => {
    return(
    list.map((l, i)=>{
			let str = "hobby" + (i+1).toString();
      return (
        <div className = "form-group mt-2" key = {i}>
					 
          <label className="lead">Hobby {i+1}</label>
          
          <select className = "form-control" 
                onChange= {handleChange(i)}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies[str])
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
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
  
  const handleChange = (idx) => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.hobbies.value[idx] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.hobbies.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Hobbies</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresume.hobbies.title}
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