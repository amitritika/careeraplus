const RightBlock = (props) =>{
  
  let height = (props.fac * props.height).toString() + "px";
  let width = (props.fac * 130).toString() + "px";
  let marginleft = (props.fac * 80).toString() + "px";
  let height1 = (props.fac * 10).toString() + "px";
  let top = (props.fac * (props.height-10)).toString() + "px";
  let bg = props.bg;
  let font = props.font;
  let id = props.id
  let arr = [];
  let count = Math.floor((props.height+1)/297);
  let t = 0;
  for (var i =0; i<count; i++){
    
    let top1 = (props.fac * (t)).toString() + "px";
    t = 297 * (i + 1);
    let top2 = (props.fac * (t-10)).toString() + "px";
    arr.push([top1, top2]);
  }
  
  const showBar = ()=>{
    console.log(arr)
    
    return(
    arr.map((t, i)=> {
      
      return (
        <React.Fragment>
          <div style = {{position: `absolute`, top: `${t[0]}`, height: `${height1}`, width: `${width}`, backgroundColor: `${bg}`}}></div>
          <div style = {{position: `absolute`, top: `${t[1]}`, height: `${height1}`, width: `${width}`, backgroundColor: `${bg}`}}></div>
        </React.Fragment>
      )
    })
    )
  }
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, marginLeft: `${marginleft}`}}>
      {showBar()}
    </div>
  )
}

 export default RightBlock;