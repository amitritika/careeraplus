const UserName = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 105).toString() + "px";
  let str = props.props.name;
  let name = props.props.name.split(' ');
  
  
  
  let widthL = (props.fac * (100 - (str.length * 6))).toString() + "px";
  let leftL = (props.fac * (str.length * 6 + 5)).toString() + "px";
  let topL = (props.fac * ((props.props.height/2)-0)).toString() + "px";
  let heightL = (props.fac * 1).toString() + "px";
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 9.6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`}}>
       <span style = {{color: `${font}`}}>{name[0]} </span><span style = {{color: `${bg}`}}>{name[1]}</span>
      <hr style = {{position: `absolute`, top: `${topL}`, left: `${leftL}`, width: `${widthL}`, margin: `0`, backgroundColor: `${bg}`, height: `${heightL}`}}></hr>
    </div>
  )
}

 export default UserName;