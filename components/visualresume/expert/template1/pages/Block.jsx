const Block = (props) =>{
  let height = (props.fac * 297).toString() + "px";
  let width = (props.fac * 210).toString() + "px";
  let id = props.id
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, margin: `0`, backgroundColor: `white`}}>
    
    </div>
  )
}

 export default Block;