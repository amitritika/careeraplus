const LeftBlockBullet = (props) =>{
  let height = (props.fac * 28).toString() + "px";
  let width = (props.fac * 76).toString() + "px";
  
  let name = props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 28).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 2).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";


  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `white`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
       {name}
    </div>
  )
}

 export default LeftBlockBullet;