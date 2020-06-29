import renderHTML from 'react-render-html';

const RightBlockWorkExp = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 113).toString() + "px";
  
  let org = props.props.org;
  let type = props.props.type;
  let desc = props.props.desc;
  let startD = props.props.startD;
  let endD = props.props.endD;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 17).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 1).toString() + "px";
  let top2 = (props.fac * 5).toString() + "px";
  let top3 = (props.fac * 9).toString() + "px";
  let role = props.props.role;
  
  
  let top5 =(props.fac * 3).toString() + "px";
  let height1 =(props.fac * 3).toString() + "px";
  let left1 = (props.fac * -6).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      <div style = {{top: `${top5}`, position: `absolute`, height: `${height1}`, width: `${height1}`, borderRadius: `50%`, backgroundColor: `${bg}`, left: `${left1}`}}></div>
      <p style = {{lineHeight: `${size}`}}><span style = {{fontWeight: `bold`, color: `${bg}`, fontStyle:`italic`}}>{type}</span>: <span style = {{fontStyle: `italic`}}>{startD}-{endD}</span></p>
      <p style = {{}}><span style = {{fontWeight: `bold`, color: `${bg}`}}>{org}</span></p>
      <div style = {{}}>
        {renderHTML(desc)}
      </div>
    </div>
  )
}

 export default RightBlockWorkExp;