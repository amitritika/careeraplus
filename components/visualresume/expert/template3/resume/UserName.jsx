import {textWidth} from "../../../../../helpers/visualresume/expert/template3/template3"

const UserName = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 120).toString() + "px";
  let str = props.props.name;
  let name = props.props.name.split(' ');
  let a = 9.6;
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  
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

  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${height}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`}}>
       <span style = {{color: `${font}`}}>{name[0]} </span><span style = {{color: `${font}`}}>{name[1]}</span>
      
    </div>
  )
}

 export default UserName;