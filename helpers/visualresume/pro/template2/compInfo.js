import BlockHeading from "../../../../components/visualresume/expert/template2/resume/BlockHeading"
import RightBlockHeading from "../../../../components/visualresume/expert/template2/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template2/resume/RightBlockLogo"
import RightBlockComp from "../../../../components/visualresume/expert/template2/resume/RightBlockComp"
import {textWidth} from "./template2";
import { FaUserPlus } from "react-icons/fa";
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
    obj.block.props.push({top: rightH + marginSec, name: FaUserPlus});
    
    obj.block.components.push(BlockHeading);
    obj.block.ids.push("comp");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("comp-logo");
    obj.right.props.push({top: rightH + marginSec, name: FaUserPlus});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("comp");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  data.value.map((c, i)=> {
    let left = 15 + width;
    let arr = textWidth("calibri", "normal", "3.2pt", "auto", c);
    width = width + arr[1] + 2* marginBullet;
    
    if(width > 115){
      width = 0;
      left = 15 + width;
      rightH = rightH + marginBullet + 5 + marginBullet;
      obj.right.components.push(RightBlockComp);
      obj.right.ids.push("comp");
      obj.right.props.push({top: rightH, name: c, left: left, width: arr[1] + marginBullet});
      width = width + arr[1] + 2* marginBullet;
      
    }else{
      obj.right.components.push(RightBlockComp);
      obj.right.ids.push("comp");
      obj.right.props.push({top: rightH , name: c, left: left, width: arr[1] + marginBullet});
    }
  })
  
  rightH = rightH + marginSec + 5;
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

export default compInfo;