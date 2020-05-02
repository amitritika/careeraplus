const LeftBlock = (props) =>{
  let height = (props.fac * props.height).toString() + "px";
  let width = (props.fac * 80).toString() + "px";
  let bg = props.bg;
  let font = props.font;
  let id = props.id
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, margin: `0`, backgroundColor: `${bg}`}}>
    
    </div>
  )
}

 export default LeftBlock;