import { Container, Row, Col, Button, NavLink } from 'reactstrap';

const PersonalInfo = (props) =>{
  
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const back = props.back;
  const c = "personalInfoDisplay";
  
  
  const handleNext = () => {
    let arr = visualresume.layout.list;
    let index = arr.findIndex(k => k== c);
    if (index !== -1 ) {
      if(index !== arr.length-1){
       next(c, arr[index+1]);
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
  
  const handleChange = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.pesrsonalInformation[n] = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeVisa = e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.personalInformation.visa.value = e.target.value;
      vr(visualresumeCopy);
    };
  
  const handleChangeCheck = e => {
      let visualresumeCopy = visualresume;
      if(e.target.checked){
        visualresumeCopy.pesrsonalInformation.addressDisplay = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.pesrsonalInformation.addressDisplay = false;
        vr(visualresumeCopy);
      }
    };
  
  const handleChangeCheckPhone = e => {
      let visualresumeCopy = visualresume;
      if(e.target.checked){
        visualresumeCopy.pesrsonalInformation.phone2Display = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.pesrsonalInformation.phone2Display = false;
        vr(visualresumeCopy);
      }
    };
  
  return(
  <div className= "container">
           
    <div className="form-group">
      
      <label className="lead">Designation</label>
      <input 
        type = "text"
        className="form-control"
        defaultValue={props.visualresume.pesrsonalInformation.designation}
        onChange= {handleChange("designation")}>
      </input>
      <label className="lead">Phone Number</label>
      <input 
        type = "text"
        className="form-control"
        value={props.visualresume.pesrsonalInformation.phone}
        onChange= {handleChange("phone")}>
      </input>
      {!props.visualresume.pesrsonalInformation.phone2Display && <label className="lead">Check for Additional Phone</label>}
      {props.visualresume.pesrsonalInformation.phone2Display && <label className="lead">UnCheck for Only One Phone</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresume.pesrsonalInformation.phone2Display}
            onChange = {handleChangeCheckPhone} ></input>
      {props.visualresume.pesrsonalInformation.phone2Display && <div>
        <label className="lead">Additional Phone Number</label>
        <input 
          type = "text"
          className="form-control"
          value={props.visualresume.pesrsonalInformation.phone2}
          onChange= {handleChange("phone2")}>
        </input>
      </div>}
      {!props.visualresume.pesrsonalInformation.addressDisplay && <label className="lead">Check for Full Address</label>}
      {props.visualresume.pesrsonalInformation.addressDisplay && <label className="lead">UnCheck for One Line Address</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresume.pesrsonalInformation.addressDisplay}
            onChange = {handleChangeCheck} ></input>
      {!props.visualresume.pesrsonalInformation.addressDisplay && <div>
        <label className="lead">One Line Address</label>
        <input 
          type = "text"
          className="form-control"
          value={props.visualresume.pesrsonalInformation.address}
          onChange= {handleChange("address")}>
        </input>
      </div>}
      {
        props.visualresume.pesrsonalInformation.addressDisplay && <div>
          <label className="lead">Full Address</label>
          <input 
            type = "text"
            className="form-control"
            value={props.visualresume.pesrsonalInformation.addressFull}
            onChange= {handleChange("addressFull")}>
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