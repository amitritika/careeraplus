import { IconContext } from "react-icons";

const LeftBlockContactInfo = (props) =>{

  let name = props.props.name;
  //let icon = props.props.icon;
  let Icon = props.props.icon
  let iconClass = "fas fa-" + props.props.icon
  let bg = props.bg;
  let font = props.font;
  let id = props.id;

  let left = (props.fac * 0).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  let textWidth = (props.fac * 62).toString() + "px";
  let textHeight = (props.fac * props.props.height).toString() + "px";
  let textLine = (props.fac * 5).toString() + "px";
  let textLeft = (props.fac * 15).toString() + "px";
  let textFont = (props.fac * 3.2).toString() + "pt";
  
  let iconLeft = (props.fac * 6).toString() + "px";
  let iconFont = (props.fac * 3.2).toString() + "pt";

  return (
    <div id = {id} style = {{ height: `${textHeight}`, color: `white`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, textAlign: `center`, fontWeight: `bold`}}>
      <IconContext.Provider value={{ color: "white" }}>
        <div style = {{position: `absolute`, left: `${iconLeft}` , fontSize: `${iconFont}`, lineHeight: `${textLine}`}}>
          <Icon />
        </div>
      </IconContext.Provider>
      <div style = {{height: `${textHeight}`, width: `${textWidth}`, color: `white`, lineHeight: `${textLine}`, position: `absolute`, left: `${textLeft}`, fontFamily: `calibri`, fontSize: `${textFont}`, textAlign: `left`, fontWeight: `regular`}}>{name}</div>
    </div>
  )
}

 export default LeftBlockContactInfo;