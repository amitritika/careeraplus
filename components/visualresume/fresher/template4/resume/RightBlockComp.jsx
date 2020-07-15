const RightBlockComp = (props) =>{
  let height = (props.fac * 5).toString() + "px";
  let width = (props.fac * props.props.width).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 5).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * props.props.left).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let bo = (props.fac * 1).toString() + "px";
  

  return (
    <div id = {id} style = {{position: `absolute`, width: `${width}`, top: `${top}`, left: `${left}`, textAlign: `center`, borderRadius: `${bo}`, backgroundColor: `${bg}`, color: `white`, fontFamily: `calibri`, fontSize: `${size}`}}>
      {name}
    </div>
  )
}

 export default RightBlockComp;