import LeftBlockBullet from "../../../../components/visualresume/expert/template1/resume/LeftBlockBullet"
import LeftBlockHeading from "../../../../components/visualresume/expert/template1/resume/LeftBlockHeading"


const profileSummary = (obj, data, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
 
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("profile");
  obj.left.props.push({top: leftH + marginSec, name: data.title , height: 9});
  
  leftH = leftH + marginSec + 9;
  
  data.value.map((p, i)=> {
    let height = (Math.floor(p.length/40) + 2) * 5;
    let str = "profile-point-" + i.toString();
    
    obj.left.components.push(LeftBlockBullet);
    obj.left.ids.push(str);
    obj.left.props.push({top: leftH + marginBullet, name: p , height: height});
    leftH = leftH + marginBullet + height;
    
    if(leftH > obj.countL * 297){
      obj.countL = obj.countL + 1;
      
      obj.left.components.pop();
      obj.left.ids.pop();
      obj.left.props.pop();
      
      leftH = (297* (obj.countL-1)) + marginPage;
      
      obj.left.components.push(LeftBlockBullet);
      obj.left.ids.push(str);
      obj.left.props.push({top: leftH + marginBullet, name: p , height: height});
      leftH = leftH + marginBullet + height;
    }
  })
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
} 

export default profileSummary;