import renderHTML from 'react-render-html';

const VL = (props) =>{
  let height = (props.fac * 267).toString() + "px";
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 80).toString() + "px";
  let left1 = (props.fac * 1.5).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let bo1 = (props.fac * 1).toString() + "px";
  let bo2 = (props.fac * 0.5).toString() + "px";


  return (
    <div id = {id} style = {{height: `${height}`, position: `absolute`, top: `${top}`, left: `${left}`}}>
      <div style = {{height: `${height}`, position: `absolute`, borderLeft: `${bo1} solid ${bg}`}} ></div>
      <div style = {{height: `${height}`, position: `absolute`, left: `${left1}`, borderLeft: `${bo2} solid ${bg}`}} ></div>
    </div>
  )
}

 export default VL;