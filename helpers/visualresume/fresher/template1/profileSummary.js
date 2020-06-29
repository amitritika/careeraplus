import LeftBlockBullet from "../../../../components/visualresume/fresher/template1/resume/LeftBlockBullet"
import LeftBlockHeading from "../../../../components/visualresume/fresher/template1/resume/LeftBlockHeading"
import {textWidth} from "./template1";

const profileSummary = (obj, data, title, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
 
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("profile");
  obj.left.props.push({top: leftH + marginSec, name: title , height: 9});
  
  leftH = leftH + marginSec + 9;
  

    
    let arr = textWidth("calibri", "normal", "3.2pt", "78px", data);
    let height = arr[0];
    
    
    obj.left.components.push(LeftBlockBullet);
    obj.left.ids.push("profile");
    obj.left.props.push({top: leftH + marginBullet, name: data , height: height});
    leftH = leftH + marginSec + height;
    
    
  
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
} 

export default profileSummary;