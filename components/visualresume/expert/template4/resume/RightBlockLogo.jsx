const RightBlockLogo = (props) =>{
  let height = (props.fac * 13).toString() + "px";
  let width = (props.fac * 13).toString() + "px";
  
  let name = "fas fa-" + props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 13).toString() + "px";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  

  return (
    <div id = {id} style = {{position: `absolute`, top: `${top}`, left: `${left}`, textAlign: `center`, borderRadius: `50%`, zIndex: `2`}}>
      <i className = {name} style = {{height: `${height}`, width: `${width}`, color: `${font}`, lineHeight: `${line}`, fontSize: `${size}`, zIndex: `3`}}></i>
    </div>
  )
}

 export default RightBlockLogo;