const RightBlockLogo = (props) =>{
  let height = (props.fac * 8).toString() + "px";
  let width = (props.fac * 8).toString() + "px";
  let height1 = (props.fac * 15).toString() + "px";
  let width1 = (props.fac * 32).toString() + "px";
  
  let logo = props.props.logo;
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 8).toString() + "px";
  let size1 = (props.fac * 4).toString() + "pt";
  let left = (props.fac * props.props.left).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let size = (props.fac * 2).toString() + "pt";
  let left1 = (props.fac * 11).toString() + "px";
  let top1 = (props.fac * 11).toString() + "px";
  return (
    <div id = {id} style = {{position: `absolute`, top: `${top}`, left: `${left}`, textAlign: `center`, fontSize: `${size}`,color: `${bg}`, height: `${height1}`, width: `${width1}`}}>
      <div style = {{position: `absolute`, left: `${left1}`, textAlign: `center`, zIndex: `2`}}>
        <i className = {logo} style = {{height: `${height}`, width: `${width}`, color: `${bg}`, lineHeight: `${line}`, fontSize: `${size1}`, zIndex: `3`}}></i>
      </div>
      <div style = {{position: `absolute`, top: `${top1}`, width: `100%`, textAlign: `center`}}>
         {name}
      </div>
       
    </div>
    
  )
}

 export default RightBlockLogo;