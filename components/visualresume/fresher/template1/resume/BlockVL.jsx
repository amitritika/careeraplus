
const BlockVL = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 12).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let bo = (props.fac * 1).toString() + "px";


  return (
    <div id = {id} style = {{height: `${height}`, position: `absolute`, top: `${top}`, left: `${left}`, borderLeft: `${bo} solid ${bg}`}}>
    </div>
  )
}

 export default BlockVL;