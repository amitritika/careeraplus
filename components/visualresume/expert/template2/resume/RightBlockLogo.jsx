const RightBlockLogo = (props) =>{
  let height = (props.fac * 9).toString() + "px";
  let width = (props.fac * 9).toString() + "px";
  
  let name = "fas fa-" + props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * 13).toString() + "px";
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
  

  return (
    <div id = {id} style = {{position: `absolute`, top: `${top}`, left: `${left}`, textAlign: `center`, zIndex: `2`}}>
     <div style = {{height: `${heightI}`, width: `${heightI}`, position: `absolute`, border: `${border} solid ${bg}`,  transform: `rotate(-45deg)`, borderRadius: `${radius}`, left: `${left1}`}}>
        <div style = {{ position: `absolute`, transform: `rotate(45deg)`, color: `${bg}`, fontSize: `${size1}`, margin: `${marginL} ${marginT}`}}>
          <i className={name}></i>
        </div>
      </div> 
    </div>
  )
}

 export default RightBlockLogo;