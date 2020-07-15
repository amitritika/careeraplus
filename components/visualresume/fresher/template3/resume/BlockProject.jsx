import renderHTML from 'react-render-html';

const BlockProject = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 180).toString() + "px";
  
  let title = props.props.data.title;
  let desc = props.props.data.desc;
  let desg = props.props.data.designation.value;
  let startD = props.props.data.date.startDate;
  let endD = props.props.data.date.endDate;
  let client = props.props.data.client.value;
  let desgShow = props.props.data.designation.optional;
  let clientShow = props.props.data.client.optional;
  let dateShow = props.props.data.date.optional;
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
  let topD = (props.fac * 8).toString() + "px";
  let top4 = (props.fac * 3).toString() + "px";
  let height1 = (props.fac * 3).toString() + "px";
  let left1 = (props.fac * -6).toString() + "px";
  
  let lineH = (props.fac * (props.props.height - 2)).toString() + "px";
  let lineT = (props.fac * 1.5).toString() + "px";
  let lineL = (props.fac * -7).toString() + "px";
  let lineOp = props.props.line;
  let lineW = (props.fac * 0.5).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
     
      <p style = {{top: `${top1}`, position: `absolute`, color: `${bg}`}}>{title}</p>
      {(desgShow || dateShow || clientShow) && <p style = {{top: `${top2}`, position: `absolute`}}>
        {desgShow && <span style = {{fontWeight: `bold`, color: `${bg}`}}>{desg} - </span>  }
        {dateShow && <span style = {{fontStyle: `italic`}}>{startD}-{endD} | </span>}
        {clientShow && <span style = {{fontStyle: `italic`, color: `${bg}`}}>{client}</span>}</p>}
      
      {(desgShow || dateShow || clientShow) && <div style = {{top: `${top3}`, position: `absolute`, lineHeight: `${size}`}}>
        {renderHTML(desc)}
      </div>}
      {!(desgShow || dateShow || clientShow) && <div style = {{top: `${topD}`, position: `absolute`, lineHeight: `${size}`}}>
        {renderHTML(desc)}
      </div>}
      <div style = {{position: `absolute`, color: `${bg}`, fontSize:`${size}`, top: `${lineT}`, left: `${lineL}`}}>
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
  )
}

 export default BlockProject;