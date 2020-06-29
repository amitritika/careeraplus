import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

const AreaOfIntrestInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "areaOfIntrestInfoDisplay";
  
  const [list, setList] = useState(visualresume.areaOfIntrest.value);
  
  const [comp, setComp] = useState("");
  
  const handleDelete = (idx) => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.splice(idx, 1);
    setList(arr);
    visualresumeCopy.areaOfIntrest.value = arr;
    vr(visualresumeCopy)
  }
  
  const handleAdd = () => {
    let arr = list;
    let visualresumeCopy = visualresume;
    arr.push({
        category: "engineering",
        stream: "ME",
        subject: "Heat Transfer"})
    
    setList(arr);
    visualresumeCopy.areaOfIntrest.value = arr;
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
  
  const handleChangeArea = (n, idx) => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.areaOfIntrest[n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleTitle = e => {
    let visualresumeCopy = visualresume;
    visualresumeCopy.areaOfIntrest.title = e.target.value;
    vr(visualresumeCopy);
  }
  
  return(
  <div className= "container">
      <label className="lead">Area Of Intrest</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={visualresume.areaOfIntrest.title}
        onChange= {handleTitle}>
      </input>
       <div className="form-group">
					 <label className="lead">Area Of Intrest 1</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1")}>
							{props.areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1Topic")}>
							{props.areaOfIntrest.topics[visualresume.areaOfIntrest.area1].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 2</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2")}>
							{props.areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2Topic")}>
							{props.areaOfIntrest.topics[visualresume.areaOfIntrest.area2].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 3</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3")}>
							{props.areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3Topic")}>
							{props.areaOfIntrest.topics[visualresume.areaOfIntrest.area3].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    
  </div>
  )
}

export default AreaOfIntrestInfo;