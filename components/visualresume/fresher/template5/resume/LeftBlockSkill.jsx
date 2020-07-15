const LeftBlockBullet = (props) =>{
  let height = (props.fac * 15).toString() + "px";
  let width = (props.fac * 70).toString() + "px";
  let arr = [];
  
  
  let name = props.props.name;
  let rating = (props.props.rating).toString() + "%";;
  let int = Math.floor(rating);
  let f = rating-int;
  let int1 = 5 - int;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  
  
  
  const skillShow = () =>{
    for (var i = 1; i <= 5; i++){
      if(i <= int){
        arr.push("fas fa-star");
      }else if(i> int && f > 0.01 && f < 0.9){
        arr.push("fas fa-star-half-alt")
      }else{
        arr.push("far fa-star")
      }
    }
    let left1 = 4;
    return (
        arr.map((c, i)=> {
            let left = (props.fac * left1).toString() + "px";
            left1 = left1 + 6;
          return(
            <div style = {{position: `absolute`, left: `${left}`, color:`white`}}>
              <i className={c}></i>
            </div>
            
          )
        })
      )
  }
 
 let r = (props.fac * 7.5).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let paddingP = (props.fac * 0).toString() + "px";
  
  let heightDiv = (props.fac * 2).toString() + "px";
  let borderT = (props.fac * .5).toString() + "px";
  let width1 = (props.fac * 65).toString() + "px";
  let thick = (props.fac * 0.5).toString() + "px";
  let borderColor = props.bg.replace("rgb(", "rgba(");
  borderColor = borderColor.replace(")", ", 0.4)");
  

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${bg}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
       <p style = {{margin: `0px`, padding: `0 ${paddingP}`}}>{name}</p>
      <div style = {{position: `absolute`, width: `100%`, height: `${heightDiv}`, backgroundColor: `${borderColor}`}}></div>
      <div style = {{position: `absolute`, width: `${rating}`, height: `${heightDiv}`,zIndex: `2`, backgroundColor: `${bg}`}}></div>
      
    </div>
  )
}

 export default LeftBlockBullet;