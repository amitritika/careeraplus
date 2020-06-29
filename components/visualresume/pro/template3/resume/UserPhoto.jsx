const UserPhoto = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * props.props.height).toString() + "px";
  let height1 = (props.fac * (props.props.height+4)).toString() + "px";
  let width1 = (props.fac * (props.props.height+4)).toString() + "px";
  let radius = (props.fac * props.props.r).toString() + "px";
  let border = (props.fac * 1).toString() + "px";
  let src = props.props.photo;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let left = (props.fac * 13).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let left1 = (props.fac * 1).toString() + "px";
  let top1 = (props.fac * 1).toString() + "px";
  let t1 = (props.fac * 0.5).toString() + "px";
  let t2 = (props.fac * 1).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height1}`, width: `${width1}`, position: `absolute`, top: `${top}`, left: `${left}`, borderRadius: `50%`, border: `${t2} solid ${bg}`}}>
      
      <img style = {{height: `${height}`, width: `${width}`,position: `absolute`, borderRadius: `50%`, top: `${top1}`, left: `${left1}`, border:`${t1} solid ${bg}`}} src={src} />
       
    </div>
  )
}

 export default UserPhoto;