import LeftBlockBullet from "../../../../components/visualresume/fresher/template4/resume/LeftBlockBullet"
import LeftBlockHeading from "../../../../components/visualresume/fresher/template4/resume/LeftBlockHeading"
import {textWidth} from "./template4";
import { FaUser } from 'react-icons/fa';
const profileSummary = (obj, data, title, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
 marginSec = 2
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("profile");
  obj.left.props.push({top: leftH + marginSec, name: title , height: 9, icon: FaUser});
  
  leftH = leftH + marginSec + 9;
  
  let arr = textWidth("calibri", "normal", "3.2pt", "76px", data);
  let height = arr[0];
  let line = false;
  
  obj.left.components.push(LeftBlockBullet);
  obj.left.ids.push("profile");
  obj.left.props.push({top: leftH + marginBullet, name: data , height: height, line: line});
  leftH = leftH + 2*marginSec + height;
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
} 

export default profileSummary;