import {textWidth} from "../../../../../helpers/visualresume/expert/template2/template2"

const RightBlockHeading = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 66).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 20).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  
  let arr = textWidth("calibri", "bold", "6pt", "auto", name);
  let widthL = (props.fac * (100 - arr[1])).toString() + "px";
  let leftL = (props.fac * (5 + arr[1])).toString() + "px";
  let topL = (props.fac * ((props.props.height/2)-0)).toString() + "px";
  let heightL = (props.fac * 1).toString() + "px";
  width = (props.fac * arr[1]).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, color: `${bg}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`}}>
       {name}
      <hr style = {{position: `absolute`, top: `${topL}`, left: `${leftL}`, width: `${widthL}`, margin: `0`, backgroundColor: `${bg}`, height: `${heightL}`}}></hr>
    </div>
  )
}

 export default RightBlockHeading;