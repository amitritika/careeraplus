const UserPhoto = (props) =>{
  let height = (props.fac * 53).toString() + "px";
  let width = (props.fac * 53).toString() + "px";
  let src = props.photo;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * props.left).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`}}>
       <img src={photo} />
    </div>
  )
}

 export default UserPhoto;