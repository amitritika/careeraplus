const UserPhoto = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * props.props.height).toString() + "px";
  let height1 = (props.fac * props.props.height* 1.25).toString() + "px";
  let width1 = (props.fac * props.props.height * 1.25).toString() + "px";
  let marginL = (-props.fac * props.props.marginL).toString() + "px";
  let marginR = (-props.fac * props.props.marginR).toString() + "px";
  let marginT = (-props.fac * props.props.marginT).toString() + "px";
  let marginB = (-props.fac * props.props.marginB).toString() + "px";
  let radius = (props.fac * props.props.r).toString() + "px";
  let border = (props.fac * 1).toString() + "px";
  let src = props.props.photo;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 13).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`}}>
      <div style = {{height: `${height}`, width: `${width}`, position: `absolute`, border: `${border} solid white`,  transform: `rotate(-45deg)`, overflow: `hidden`, borderRadius: `${radius}`}}>
        <div style = {{height: `${height}`, width: `${width}`, position: `absolute`, transform: `rotate(45deg)`, margin: `${marginL} ${marginT} ${marginR} ${marginB}`}}>
          <img style = {{height: `${height1}`, width: `${width1}`}} src={src} />
        </div>
      </div>
       
    </div>
  )
}

 export default UserPhoto;