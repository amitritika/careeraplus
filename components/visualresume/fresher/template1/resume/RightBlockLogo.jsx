import { IconContext } from "react-icons";

const RightBlockLogo = (props) =>{
  let height = (props.fac * 13).toString() + "px";
  let width = (props.fac * 13).toString() + "px";
  
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 10).toString() + "px";
  let size = (props.fac * 7).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let Icon = props.props.name

  return (
    <div id = {id} style = {{position: `absolute`,  height: `${height}`, width: `${width}`,top: `${top}`, left: `${left}`, textAlign: `center`, zIndex: `2`}}>
      
      <div style = {{height: `${height}`, width: `${width}`, borderRadius: `50%`, backgroundColor: `${bg}`, textAlign: `center`}}>
        <IconContext.Provider value={{ color: "white" }}>
          <div style = {{fontSize: `${size}`, zIndex: `3` , lineHeight: `${line}`}}>
            <Icon />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

 export default RightBlockLogo;