const LeftBlockContactInfo = (props) =>{

  let name = props.name;
  let icon = props.icon;
  let iconClass = "fa fas-" + props.icon
  let bg = props.bg;
  let font = props.font;
  let id = props.id;

  let left = (props.fac * props.left).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";
  
  let textWidth = (props.fac * 44).toString() + "px";
  let textHeight = (props.fac * 7).toString() + "px";
  let textLine = (props.fac * 7).toString() + "px";
  let textLeft = (props.fac * 15).toString() + "px";
  let textFont = (props.fac * 3.2).toString() + "pt";
  
  let iconLeft = (props.fac * 6).toString() + "px";
  let iconFont = (props.fac * 4).toString() + "pt";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, color: `white`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `center`, fontWeight: `bold`}}>
      <i className = {iconClass} style = {{ color: `white`, position: `absolute`, left: `${iconLeft}`, fontSize: `${iconFont}`}}></i>
      <div style = {{height: `${textHeight}`, width: `${textWidth}`, color: `white`, lineHeight: `${textLine}`, position: `absolute`, left: `${textLeft}`, fontFamily: `calibri`, fontSize: `${textFont}`, textAlign: `left`, fontWeight: `regular`}}>{name}</div>
    </div>
  )
}

 export default LeftBlockContactInfo;