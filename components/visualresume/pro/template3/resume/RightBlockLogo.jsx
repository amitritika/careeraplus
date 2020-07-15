import { IconContext } from "react-icons";

const RightBlockLogo = (props) =>{
  let height = (props.fac * 9).toString() + "px";
  let width = (props.fac * 9).toString() + "px";
  
  let Icon = props.props.name
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 6).toString() + "px";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * (props.props.top+3)).toString() + "px";
  let size1 = (props.fac * 3).toString() + "pt";
  let radius = (props.fac * 1).toString() + "px";
  let border = (props.fac * 0.5).toString() + "px";
  let left1 = (props.fac * 4).toString() + "px";
  let marginL = (-props.fac * 0).toString() + "px";
  let marginT = (props.fac * 1).toString() + "px";
  let heightI =  (props.fac * 9 *0.8).toString() + "px";
  let left2 = (props.fac * 2).toString() + "px";
  let top2 = (props.fac * 0).toString() + "px";

  return (
    <div id = {id} style = {{position: `absolute`, top: `${top}`, left: `${left}`, textAlign: `center`, zIndex: `2`}}>
     <div className = "template3-icon-heading" style = {{ height: `${heightI}`, width: `${heightI}`, position: `absolute`, lineHeight: `${line}`,textAlign: `center`, color: `white`, fontSize: `${size1}`, top: `${top2}`, left: `${left2}`, borderRadius: `50%`, backgroundColor: `${bg}`}}>
          <IconContext.Provider value={{ color: "white" }}>
            <div style = {{fontSize: `${size1}`}}>
              <Icon />
            </div>
          </IconContext.Provider>
        </div>
    </div>
  )
}

 export default RightBlockLogo;