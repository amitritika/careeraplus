const RightBlock = (props) =>{
  
  let height = (props.fac * 297).toString() + "px";
  let width = (props.fac * 130).toString() + "px";
  let marginleft = (props.fac * 80).toString() + "px";
  let bg = props.bg;
  let font = props.font;
  let id = props.id
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, marginLeft: `${marginleft}`, backgroundColor: `white`}}>
    
    </div>
  )
}

 export default RightBlock;