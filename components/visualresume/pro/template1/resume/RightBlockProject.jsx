import renderHTML from 'react-render-html';

const RightBlockProject = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 113).toString() + "px";
  
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
  let top4 = (props.fac * 3).toString() + "px";
  
  let height1 = (props.fac * 3).toString() + "px";
  let left1 = (props.fac * -6).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      <div style = {{top: `${top4}`, position: `absolute`, height: `${height1}`, width: `${height1}`, borderRadius: `50%`, backgroundColor: `${bg}`, left: `${left1}`}}></div>
      <p style = {{top: `${top1}`, position: `absolute`, color: `${bg}`}}>{title}</p>
      {(desgShow || dateShow || clientShow) && <p style = {{top: `${top2}`, position: `absolute`}}>
        {desgShow && <span style = {{fontWeight: `bold`, color: `${bg}`}}>{desg} - </span>  }
        {dateShow && <span style = {{fontStyle: `italic`}}>{startD}-{endD} | </span>}
        {clientShow && <span style = {{fontStyle: `italic`, color: `${bg}`}}>{client}</span>}</p>}
      <div style = {{top: `${top3}`, position: `absolute`}}>
        {renderHTML(desc)}
      </div>
      
    </div>
  )
}

 export default RightBlockProject;