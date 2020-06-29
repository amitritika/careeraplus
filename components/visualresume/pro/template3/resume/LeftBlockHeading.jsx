import { IconContext } from "react-icons";

const LeftBlockHeading = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 60).toString() + "px";
  
  let Icon = props.props.icon
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 8).toString() + "px";
  let size = (props.fac * 6).toString() + "pt";
  let size1 = (props.fac * 3).toString() + "pt";
  let left = (props.fac * 15).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  let radius = (props.fac * 1).toString() + "px";
  let border = (props.fac * 0.5).toString() + "px";
  let left1 = (props.fac * 4).toString() + "px";
  let marginL = (-props.fac * 1.5).toString() + "px";
  let marginT = (props.fac * 1).toString() + "px";
  let heightI =  (props.fac * (props.props.height)*0.8).toString() + "px";
  let left2 = (props.fac * 5).toString() + "px";
  let top2 = (props.fac * -0.5).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, color: `white`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, fontFamily: `calibri`, fontSize: `${size}`, fontWeight: `bold`}}>
     <div className = "template3-icon-heading" style = {{ height: `${height}`, width: `${height}`, position: `absolute`, lineHeight: `${line}`,textAlign: `center`, color: `white`, fontSize: `${size1}`, top: `${top2}`, left: `${left2}`, borderRadius: `50%`, backgroundColor: `${bg}`}}>
          <IconContext.Provider value={{ color: "white" }}>
            <div style = {{fontSize: `${size1}`}}>
              <Icon />
            </div>
          </IconContext.Provider>
        </div>
      <div style = {{position: `absolute`, top: `0px`, left: `${left}`, color: `${font}`}}>
         {name}
       </div>
    </div>
  )
}

 export default LeftBlockHeading;