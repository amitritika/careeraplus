import LeftBlockBullet from "../../../../components/visualresume/expert/template2/resume/LeftBlockBullet"
import LeftBlockHeading from "../../../../components/visualresume/expert/template2/resume/LeftBlockHeading"
import {textWidth} from "./template2";

const profileSummary = (obj, data, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
 
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("profile");
  obj.left.props.push({top: leftH + marginSec, name: data.title , height: 9});
  
  leftH = leftH + marginSec + 9;
  
  data.value.map((p, i)=> {
    
    let arr = textWidth("calibri", "normal", "3.2pt", "76px", p);
    let height = arr[0];
    let str = "profile-point-" + i.toString();
    let line = true;
    if(i == data.value.length -1){
      line = false;
    }
    
    obj.left.components.push(LeftBlockBullet);
    obj.left.ids.push(str);
    obj.left.props.push({top: leftH + marginBullet, name: p , height: height, line: line});
    leftH = leftH + 2*marginBullet + height;
    
    if(leftH > obj.countL * 297){
      obj.countL = obj.countL + 1;
      
      obj.left.components.pop();
      obj.left.ids.pop();
      obj.left.props.pop();
      
      leftH = (297* (obj.countL-1)) + marginPage;
      
    if(obj.countL == 2){
      obj.page1.left.components = obj.left.components;
      obj.page1.left.ids = obj.left.ids;
      obj.page1.left.props = obj.left.props;
    }
      
      obj.left.components.push(LeftBlockBullet);
      obj.left.ids.push(str);
      obj.left.props.push({top: leftH + marginBullet, name: p , height: height, line: line});
      leftH = leftH + 2*marginBullet + height;
    }
    
    if(obj.countL == 1){
      obj.page1.left.components = obj.left.components;
      obj.page1.left.ids = obj.left.ids;
      obj.page1.left.props = obj.left.props;
    }
  })
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
} 

export default profileSummary;