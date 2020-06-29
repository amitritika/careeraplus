import { Container, Row, Col, Button, NavLink } from 'reactstrap';

const PersonalInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresumeexp = props.visualresumeexp;
  const next = props.next;
  const back = props.back;
  const c = "personalInfoDisplay";
  
  
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
        next(c, "layoutInfoDisplay");
      }
    }
  }
  
  const handleChange = n => e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.personalInformation[n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeVisa = e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.personalInformation.visa.value = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeCheck = e => {
      let visualresumeCopy = visualresumeexp;
      if(e.target.checked){
        visualresumeCopy.personalInformation.visa.optional = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.personalInformation.visa.optional = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleChangeCheckAd = e => {
      let visualresumeCopy = visualresumeexp;
      if(e.target.checked){
        visualresumeCopy.personalInformation.addressFull.optional = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.personalInformation.addressFull.optional = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleChangeCheckPhone = e => {
      let visualresumeCopy = visualresumeexp;
      if(e.target.checked){
        visualresumeCopy.personalInformation.phone2.optional = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.personalInformation.phone2.optional = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleChangePhone = e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.personalInformation.phone2.value = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeAd = e => {
      let visualresumeCopy = visualresumeexp;
      visualresumeCopy.personalInformation.addressFull.value = e.target.value;
      vr(visualresumeCopy);
    };
  
  return(
  <div className= "container">
           
    <div className="form-group">
      <label className="lead">Designation</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={props.visualresumeexp.personalInformation.designation}
        onChange= {handleChange("designation")}>
      </input>
      <label className="lead">Phone Number</label>
      <input 
        type = "text"
        className="form-control"
        value={props.visualresumeexp.personalInformation.phone}
        onChange= {handleChange("phone")}>
      </input>
      {!props.visualresumeexp.personalInformation.phone2.optional && <label className="lead">Check for Additional Phone</label>}
      {props.visualresumeexp.personalInformation.phone2.optional && <label className="lead">UnCheck for Only One Phone</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresumeexp.personalInformation.phone2.optional}
            onChange = {handleChangeCheckPhone} ></input>
      
      {
        props.visualresumeexp.personalInformation.phone2.optional && <div>
          <label className="lead">Additional Phone</label>
          <input 
            type = "text"
            className="form-control"
            value={props.visualresumeexp.personalInformation.phone2.value}
            onChange= {handleChangePhone}>
          </input>
          </div>
      }
      <br></br>
      
      {!props.visualresumeexp.personalInformation.addressFull.optional && <label className="lead">Check for Full Address</label>}
      {props.visualresumeexp.personalInformation.addressFull.optional && <label className="lead">UnCheck for One Line Address</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresumeexp.personalInformation.addressFull.optional}
            onChange = {handleChangeCheckAd} ></input>
      
      {
        props.visualresumeexp.personalInformation.addressFull.optional && <div>
          <label className="lead">Full Address</label>
          <input 
            type = "text"
            className="form-control"
            value={props.visualresumeexp.personalInformation.addressFull.value}
            onChange= {handleChangeAd}>
          </input>
          </div>
      }
      {
        !props.visualresumeexp.personalInformation.addressFull.optional && <div>
          <label className="lead">Full Address</label>
          <input 
            type = "text"
            className="form-control"
            value={props.visualresumeexp.personalInformation.address}
            onChange= {handleChange("address")}>
          </input>
          </div>
      }
      {!props.visualresumeexp.personalInformation.visa.optional && <label className="lead">Check for Visa Information</label>}
      {props.visualresumeexp.personalInformation.visa.optional && <label className="lead">UnCheck for No Visa Information</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresumeexp.personalInformation.visa.optional}
            onChange = {handleChangeCheck} ></input>
      {
        props.visualresumeexp.personalInformation.visa.optional && <div>
          <label className="lead">Visa Information</label>
          <input 
            type = "text"
            className="form-control"
            value={props.visualresumeexp.personalInformation.visa.value}
            onChange= {handleChangeVisa}>
          </input>
          </div>
      }
     </div>
    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>

  </div>
  )
}

export default PersonalInfo;