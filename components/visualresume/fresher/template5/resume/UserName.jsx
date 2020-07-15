import {textWidth} from "../../../../../helpers/visualresume/expert/template1/template1"
const UserName = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 120).toString() + "px";
  let height1 = (props.fac * 44).toString() + "px";
  let thick = (props.fac * 0.5).toString() + "px";
  let borderColor = props.bg.replace("rgb(", "rgba(");
  borderColor = borderColor.replace(")", ", 0.6)");
  let name = props.props.name;
  let a = 9.6;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * a).toString() + "pt";
  let left = (props.fac * 0).toString() + "px";
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
  
  let left1 = (props.fac * 6).toString() + "px";
  let top1 = (props.fac * 8).toString() + "px";
  return (
    <div id = {id} style = {{height: `${height1}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`, color:`${bg}`, borderBottom: `${thick} solid ${borderColor}`}}>
      <div style = {{height: `${height1}`, width: `${width}`, position: `absolute`, left: `${left1}`, top: `${top1}`}}>
        {name}
      </div> 
    </div>
  )
}

 export default UserName;