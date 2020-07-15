import renderHTML from 'react-render-html';

const VL = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 80).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let thick = (props.fac * 0.5).toString() + "px";
  let borderColor = props.bg.replace("rgb(", "rgba(");
  borderColor = borderColor.replace(")", ", 0.6)");


  return (
    <div id = {id} style = {{height: `${height}`, position: `absolute`, top: `${top}`, left: `${left}`, borderLeft: `${thick} solid ${borderColor}`}}>
    </div>
  )
}

 export default VL;