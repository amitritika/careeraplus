const LeftBlockContactInfo = (props) =>{
  
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 80).toString() + "px";

  let name = props.props.name;
  let icon = props.props.icon;
  let iconClass = "fas fa-" + props.props.icon
  let bg = props.bg;
  let font = props.font;
  let id = props.id;

  let left = (props.fac * 0).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  let textWidth = (props.fac * 44).toString() + "px";
  let textHeight = (props.fac * props.props.height).toString() + "px";
  let textLine = (props.fac * props.props.height).toString() + "px";
  let textLeft = (props.fac * 15).toString() + "px";
  let textFont = (props.fac * 3.2).toString() + "pt";
  
  let iconLeft = (props.fac * 6).toString() + "px";
  let iconFont = (props.fac * 3.2).toString() + "pt";
  
  let radius = (props.fac * 1).toString() + "px";
  let border = (props.fac * 0.5).toString() + "px";
  let left1 = (props.fac * 7).toString() + "px";
  let marginL = (-props.fac * 0).toString() + "px";
  let marginT = (props.fac * 0.5).toString() + "px";
  let heightI =  (props.fac * (props.props.height)).toString() + "px";
  let size1 = (props.fac * 2).toString() + "pt";
  let left3 = (props.fac * 15).toString() + "px";
  let top1 = (props.fac * -0.5).toString() + "px";
  let left2 = (props.fac * 8).toString() + "px";
  let top2 = (props.fac * 0.5).toString() + "px";

  return (
    <div id = {id} style = {{ height: `${textHeight}`, width: `${width}`,color: `white`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, textAlign: `center`, fontWeight: `bold`}}>
      

     <div className = "template2-icon-heading" style = {{ height: `${heightI}`, width: `${heightI}`, position: `absolute`, lineHeight: `${heightI}`,textAlign: `center`, color: `white`, fontSize: `${size1}`, top: `${top2}`, left: `${left2}`, borderRadius: `50%`, backgroundColor: `${bg}`}}>
          <i className={iconClass}></i>
        </div>
      <div style = {{position: `absolute`, top: `${top1}`, left: `${left3}`, fontSize: `${textFont}`, color: `${font}`}}>
         {name}
       </div>
    </div>
  )
}

 export default LeftBlockContactInfo;