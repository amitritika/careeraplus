import { Container, Row, Col, Button, NavLink } from 'reactstrap';

const UserInfo = (props) =>{
  
  const photo = props.photo;
  const name = props.name;
  const email = props.email;
  const vr = props.vr;
  const visualresumepro = props.visualresumepro;
  const next = props.next;
  const back = props.back;
  const c = "userInfoDisplay";
  
  
  const handleNext = () => {
    let arr = visualresumepro.layout.list;
    let index = arr.findIndex(k => k== c);
    if (index !== -1 ) {
      if(index !== arr.length-1){
       next(c, arr[index+1]);
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
  
  const handleChangeCheck = e => {
      let visualresumeCopy = visualresumepro;
      if(e.target.checked){
        visualresumeCopy.personalInformation.photoDisplay = true;
        vr(visualresumeCopy);
      }else{
        visualresumeCopy.personalInformation.photoDisplay = false;
        vr(visualresumeCopy);
      }
    };
  
  return(
  <div className= "container mt-2">
     <div style= {{width: `200px`}}>
      {!props.visualresumepro.personalInformation.photoDisplay && <label className="lead">Check for Image</label>}
      {props.visualresumepro.personalInformation.photoDisplay && <label className="lead">UnCheck for No Image</label>}
      <input  type="checkbox" 
            className = "mt-2 ml-2"
            style= {{width:`20px`, height:`20px`, lineHeight: `20px`}}
            checked = {props.visualresumepro.personalInformation.photoDisplay}
            onChange = {handleChangeCheck} ></input>
      {props.visualresumepro.personalInformation.photoDisplay && <img
          src={photo}
          className="img img-fluid img-thumbnail mb-3"
          style={{ maxHeight: 'auto', maxWidth: '100%' }}
          alt="user profile"
      />}
    </div>
    <div className="form-group">
      <label className="lead">Name</label>
      <input 
        disabled
        type = "text"
        className="form-control"
        value={name}>
      </input>
      <label className="lead">Email</label>
      <input 
        disabled
        type = "text"
        className="form-control"
        value={email}>
      </input>
     </div>
    <div className="form-group">


    <Button className = "btn alert mr-4 mt-2"onClick = {handleBack}>Back</Button>
    <Button className = "btn alert mr-4 mt-2" onClick = {handleNext}>Next</Button>
    <NavLink href="/user/update/account-information" className = "btn btn-danger">Update User Information</NavLink>
  </div>
  </div>
  )
}

export default UserInfo;