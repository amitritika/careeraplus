import renderHTML from 'react-render-html';

const RightBlockProject = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 180).toString() + "px";
  
  let degree = props.props.data.degree;
  let college = props.props.data.college;
  let year = props.props.data.year;
  let cgpa = props.props.data.cgpa;
  
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 17).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 1).toString() + "px";
  let top2 = (props.fac * 5).toString() + "px";
  let top3 = (props.fac * 10).toString() + "px";
  let top4 = (props.fac * 3).toString() + "px";
  let size1 = (props.fac * 4).toString() + "pt";
  
  let left1 = (props.fac * 52).toString() + "px";
  let left2 = (props.fac * 100).toString() + "px";
  let left3 = (props.fac * 150).toString() + "px";
  
  let top5 =(props.fac * 1.5).toString() + "px";
  let height1 =(props.fac * 3).toString() + "px";
  let left4 = (props.fac * -6).toString() + "px";
  
  let lineH = (props.fac * (props.props.height)).toString() + "px";
  let lineT = (-props.fac * (props.props.height - 2)).toString() + "px";
  let lineL = (props.fac * -5).toString() + "px";
  let lineOp = props.props.line;
  let lineW = (props.fac * 0.5).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      
      <div style = {{top: `${top1}`, position: `absolute`, color: `${font}`, fontWeight: `bold`, fontSize: `${size1}`}}>{year}</div>
      <div style = {{left: `${left1}`, position: `absolute`, top: `${top1}`, color: `${bg}`, fontWeight: `bold`, fontSize: `${size}`}}>{degree}</div>
      
      <div style = {{left: `${left2}`, position: `absolute`, top: `${top1}`, color: `${font}`, fontWeight: `bold`, fontSize: `${size}`}}>{cgpa}</div>
      <div style = {{left: `${left3}`, position: `absolute`, top: `${top1}`, color: `${font}`, fontWeight: `normal`, fontSize: `${size}`}}>{college}</div>
    
      <div style = {{position: `absolute`, color: `${bg}`, fontSize:`${size}`, top: `${top5}`, left: `${left4}`}}>
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
  )
}

 export default RightBlockProject;