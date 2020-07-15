import renderHTML from 'react-render-html';

const RightBlockPub = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 113).toString() + "px";
  
  let title = props.props.data.title;
  let name = props.props.data.name;
  let journal = props.props.data.journal;
  let year = props.props.data.year;
  let pages = props.props.data.pages;
 
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
  let height1 = (props.fac * 3).toString() + "px";
  let left1 = (props.fac * -6).toString() + "px";
  
  let lineT = (props.fac * 0.5).toString() + "px";
  let lineL = (props.fac * -6).toString() + "px";
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${bg}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      
      <p style = {{top: `${top1}`, position: `absolute`, fontWeight: `bold`, color: `${bg}`}}>{name}</p>
      <p style = {{top: `${top2}`, position: `absolute`, color: `${font}`}}>{title}</p>
      <p style = {{top: `${top3}`, position: `absolute`, color: `${bg}`}}>
        <span style = {{ fontWeight: `bold`}}>{year} -</span>
        <span style = {{ fontStyle: `italic`}}>{journal}</span>
        {(pages !== "") && <span style = {{ fontStyle: `italic`}}> | p.{pages}</span>}
      </p>
      <div style = {{position: `absolute`, color: `${bg}`, fontSize:`${size}`, top: `${lineT}`, left: `${lineL}`}}>
        <i class="fas fa-check"></i>
      </div>
    </div>
  )
}

 export default RightBlockPub;