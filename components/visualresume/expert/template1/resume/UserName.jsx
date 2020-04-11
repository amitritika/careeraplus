const UserName = (props) =>{
  let height = (props.fac * 105).toString() + "px";
  let width = (props.fac * 20).toString() + "px";
  
  let name = props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 20).toString() + "px";
  let size = (props.fac * 9.6).toString() + "pt";
  let left = (props.fac * props.left).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, fontWeight: `bold`}}>
       {name}
    </div>
  )
}

 export default UserName;