const UserPhoto = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * props.props.height).toString() + "px";
  let src = props.props.photo;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 10).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let thick = (props.fac * 1).toString() + "px";
  let borderColor = props.bg.replace("rgb(", "rgba(");
  borderColor = borderColor.replace(")", ", 0.6)");
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, borderRadius: `50%`, zIndex: `2`}}>
       <img style = {{height: `${height}`, width: `${width}`, borderRadius: `50%`, border: `${thick} solid ${borderColor}`}} src={src} />
    </div>
  )
}

 export default UserPhoto;