const Block = (props) =>{
  let height = (props.fac * props.height).toString() + "px";
  let width = (props.fac * 210).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";
  let id = props.id
  return (
    <div id = {id} style = {{height: `${height}`, top: `${top}`, width: `${width}`, position: `absolute`, margin: `0`, backgroundColor: `white`}}>
    
    </div>
  )
}

 export default Block;