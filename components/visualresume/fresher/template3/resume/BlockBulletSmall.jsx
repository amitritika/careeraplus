import renderHTML from 'react-render-html';

const BlockBulletSmall = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 183).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 17).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 3).toString() + "px";
  let height1 = (props.fac * 2).toString() + "px";
  let left1 = (props.fac * -5.5).toString() + "px";
  
  let lineH = (props.fac * (props.props.height)).toString() + "px";
  let lineT = (props.fac * 0.5).toString() + "px";
  let lineL = (props.fac * -6).toString() + "px";
  let lineOp = props.props.line;
  let size1 = (props.fac * 2.5).toString() + "pt";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      
      {name}
        <div style = {{position: `absolute`, color: `${font}`, fontSize:`${size1}`, top: `${lineT}`, left: `${lineL}`}}>
        <i class="fas fa-check"></i>
      </div>
    </div>
  )
}

 export default BlockBulletSmall;