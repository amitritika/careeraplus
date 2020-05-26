import {textWidth} from "../../../../../helpers/visualresume/expert/template2/template2"

const UserName = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 120).toString() + "px";
  let str = props.props.name;
  let name = props.props.name.split(' ');
  let a = 9.6;
  
  
  
  let topL = (props.fac * ((props.props.height/2)-0)).toString() + "px";
  let heightL = (props.fac * 1).toString() + "px";
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * a).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let size1 = (a).toString() + "pt";
  let arr = textWidth("calibri", "bold", size1, "auto", str);
  let w = arr[1];
  let dec = 0.1
  while (120 < w) {
    a = a - dec;
    size1 = (a).toString() + "pt";
    arr = textWidth("calibri", "bold", size1, "auto", str);
    w = arr[1];
    
    size = (props.fac * a).toString() + "pt";
  }
  
  let widthL = (props.fac * (118 - w)).toString() + "px";
  let leftL = (props.fac * (2 + w)).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`}}>
       <span style = {{color: `${font}`}}>{name[0]} </span><span style = {{color: `${bg}`}}>{name[1]}</span>
      <hr style = {{position: `absolute`, top: `${topL}`, left: `${leftL}`, width: `${widthL}`, margin: `0`, backgroundColor: `${bg}`, height: `${heightL}`}}></hr>
    </div>
  )
}

 export default UserName;