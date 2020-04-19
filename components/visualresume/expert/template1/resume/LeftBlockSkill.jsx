const LeftBlockBullet = (props) =>{
  let height = (props.fac * 28).toString() + "px";
  let width = (props.fac * 76).toString() + "px";
  
  let name = props.name;
  let rating = props.rating;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let height = (props.fac * 12).toString() + "px";
  let width = (props.fac * 69).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 4).toString() + "px";
  let top = (props.fac * props.top).toString() + "px";
  let paddingP = (props.fac * 2).toString() + "px";
  
  let heightDiv = (props.fac * 4).toString() + "px";


  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `white`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
       <p style = {{margin: `0px`, padding: `${paddingP}`}}>{name}</p>
      <div style = {position: `absolute`, width: `100%`, height: `${heightDiv}`, backgroundColor: `white`}}></div>
      <div style = {position: `absolute`, width: `${rating}`, height: `${heightDiv}`,zIndex: `2`, backgroundColor: `${font}`}}></div>
    </div>
  )
}

 export default LeftBlockBullet;