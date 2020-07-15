import { IconContext } from "react-icons";

const RightBlockLogo = (props) =>{
  let height = (props.fac * 0).toString() + "px";
  let width = (props.fac * 0).toString() + "px";
  
  let Icon = props.props.name
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 7).toString() + "pt";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  

  return (
    <div id = {id} style = {{position: `absolute`, height: `${height}`, width: `${width}`, top: `${top}`, left: `${left}`, textAlign: `center`, borderRadius: `50%`, zIndex: `2`}}>
     
    </div>
  )
}

 export default RightBlockLogo;