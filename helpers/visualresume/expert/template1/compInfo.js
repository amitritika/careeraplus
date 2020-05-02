import VL from "../../../../components/visualresume/expert/template1/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/expert/template1/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template1/resume/RightBlockLogo"
import RightBlockComp from "../../../../components/visualresume/expert/template1/resume/RightBlockComp"

const compInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let width = 0;
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("comp-logo");
    obj.block.props.push({top: rightH + marginSec, name: "user-plus"});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("comp");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("comp-logo");
    obj.right.props.push({top: rightH + marginSec, name: "user-plus"});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("comp");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  data.value.map((c, i)=> {
    let left = 15 + width;
    width = width + c.length * 2.5 + marginSec;
    
    if(width > 115){
      width = 0;
      left = 15 + width;
      rightH = rightH + marginBullet + 5 + marginBullet;
      obj.right.components.push(RightBlockComp);
      obj.right.ids.push("comp");
      obj.right.props.push({top: rightH, name: c, left: left, width: c.length * 2.5 + marginBullet});
      width = width + c.length * 3 + marginSec;
      
    }else{
      obj.right.components.push(RightBlockComp);
      obj.right.ids.push("comp");
      obj.right.props.push({top: rightH , name: c, left: left, width: c.length * 2.5 + marginBullet});
    }
  })
  
  rightH = rightH + marginSec + 5;
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

export default compInfo;