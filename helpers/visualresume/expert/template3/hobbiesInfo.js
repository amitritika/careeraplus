import LeftBlockContactInfo from "../../../../components/visualresume/expert/template3/resume/LeftBlockContactInfo"
import LeftBlockHeading from "../../../../components/visualresume/expert/template3/resume/LeftBlockHeading"
import {hobbiesList} from "../../expert"
import VL from "../../../../components/visualresume/expert/template3/resume/VL"

const hobbiesInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
 
  if(leftH > (obj.count * 297 - 10)){
    leftH = (297* (obj.countL-1)) + marginPage;
    obj.left.components.push(VL);
    obj.left.ids.push("vert-l-1");
    obj.left.props.push({top: (297* (obj.countL-1)) + 15});
  }
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("hobbies");
  obj.left.props.push({top: leftH + marginSec, name: data.title , height: 9, icon: "book-reader"});
  
  leftH = leftH + marginSec + 9;
  
  data.value.map((p, i)=> {
    let str = "hobbies-" + i.toString();
    
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push(str);
    obj.left.props.push({top: leftH + marginSec, name: p, icon: hobbiesList[p], height: 5});
    leftH = leftH + marginSec + 5;
    
    if(leftH > (obj.countL * 297 - 10)){
      obj.countL = obj.countL + 1;
      
      obj.left.components.pop();
      obj.left.ids.pop();
      obj.left.props.pop();
      
      obj.left.components.push(VL);
      obj.left.ids.push("vert-l-1");
      obj.left.props.push({top: (297* (obj.countL-1)) + 15});
      
      leftH = (297* (obj.countL-1)) + marginPage;
      
      obj.left.components.push(LeftBlockContactInfo);
      obj.left.ids.push(str);
      obj.left.props.push({top: leftH + marginSec, name: p, icon: hobbiesList[p], height: 5});
      leftH = leftH + marginSec + 5;
    }
  })
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
} 

export default hobbiesInfo;