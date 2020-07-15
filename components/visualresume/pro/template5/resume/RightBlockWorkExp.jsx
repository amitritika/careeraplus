import renderHTML from 'react-render-html';

const RightBlockWorkExp = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 113).toString() + "px";
  
  let org = props.props.org;
  let desg = props.props.desg;
  let startD = props.props.startD;
  let endD = props.props.endD;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let size1 = (props.fac * 3.6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 1).toString() + "px";
  let top2 = (props.fac * 5).toString() + "px";
  let top3 = (props.fac * 9).toString() + "px";
  let role = props.props.role;
  
  
  let top5 =(props.fac * 3).toString() + "px";
  let height1 =(props.fac * 3).toString() + "px";
  let left1 = (props.fac * -6).toString() + "px";
  
  let borderColor = props.bg.replace("rgb(", "rgba(");
  borderColor = borderColor.replace(")", ", 0.6)");
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${bg}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      
      <p style = {{top: `${top1}`, position: `absolute`}}><span style = {{fontWeight: `bold`, color: `${bg}`, fontSize:`${size1}`}}>{org}</span>  <span style = {{fontStyle: `italic`}}>{startD}-{endD}</span></p>
      <p style = {{top: `${top2}`, position: `absolute`, fontWeight: `bold`}}>{desg}</p>
      {role && <p style = {{top: `${top3}`, position: `absolute`, color: `${borderColor}`,fontStyle: `italic`}}>Roles & Responsibilities</p>}
    </div>
  )
}

 export default RightBlockWorkExp;