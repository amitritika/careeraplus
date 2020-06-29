import {textWidth} from "../../../../../helpers/visualresume/expert/template1/template1"
const UserName = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 210).toString() + "px";
  let height1 = (props.fac * 44).toString() + "px";
  
  let name = props.props.name;
  let a = 9.6;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * a).toString() + "pt";
  let left = (props.fac * -80).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let size1 = (a).toString() + "pt";
  let arr = textWidth("calibri", "bold", size, "auto", name);
  let w = arr[1];
  let dec = 0.1
  while (140 < w) {
    a = a - dec;
    size1 = (a).toString() + "pt";
    arr = textWidth("calibri", "bold", size1, "auto", name);
    w = arr[1];
    
    size = (props.fac * a).toString() + "pt";
  }
  
  let left1 = (props.fac * 80).toString() + "px";
  let top1 = (props.fac * 8).toString() + "px";
  return (
    <div id = {id} style = {{height: `${height1}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, backgroundColor: `${bg}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`, color:`white`}}>
      <div style = {{height: `${height1}`, width: `${width}`, position: `absolute`, left: `${left1}`, top: `${top1}`}}>
        {name}
      </div> 
    </div>
  )
}

 export default UserName;