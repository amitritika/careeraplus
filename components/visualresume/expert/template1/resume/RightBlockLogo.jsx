import { IconContext } from "react-icons";

const RightBlockLogo = (props) =>{
  let height = (props.fac * 13).toString() + "px";
  let width = (props.fac * 13).toString() + "px";
  
  let Icon = props.props.name
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 8).toString() + "pt";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  

  return (
    <div className = "template1-logo-right" id = {id} style = {{height: `${height}`, width: `${width}`,position: `absolute`, top: `${top}`, left: `${left}`, textAlign: `center`, borderRadius: `50%`, backgroundColor: `${bg}`, zIndex: `2`}}>
      <IconContext.Provider value={{ color: "white" }}>
          <div style = {{fontSize: `${size}`, zIndex: `3` , lineHeight: `${line}`}}>
            <Icon />
          </div>
        </IconContext.Provider>
    </div>
  )
}

 export default RightBlockLogo;