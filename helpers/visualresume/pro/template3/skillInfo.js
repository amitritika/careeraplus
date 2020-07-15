import LeftBlockHeading from "../../../../components/visualresume/pro/template3/resume/LeftBlockHeading"
import LeftBlockSkill from "../../../../components/visualresume/pro/template3/resume/LeftBlockSkill"
import VL from "../../../../components/visualresume/pro/template3/resume/VL"
import { FaTools} from 'react-icons/fa';
const skillInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  
  if(leftH > (obj.countL * 297 - 10)){
    leftH = (297* (obj.countL-1)) + marginPage;
    obj.left.components.push(VL);
    obj.left.ids.push("vert-l-1");
    obj.left.props.push({top: (297* (obj.countL-1)) + 15});
  }
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("skill");
  obj.left.props.push({top: leftH + marginSec, name: data.title , height: 9, icon: FaTools});
  
  leftH = leftH + marginSec + 9;
  
  data.value.map((s, i)=>{
    
    let rating = (parseInt(s.rating) / 5) * 100;
    if (rating > 100){
      rating = 100;
    }
    
    
    obj.left.components.push(LeftBlockSkill);
    obj.left.ids.push("skill");
    obj.left.props.push({top: leftH + marginSec, name: s.value , rating: rating});
    
    leftH = leftH + marginSec + 15;
    console.log(obj.countL, leftH)
    console.log(obj.left.props[obj.left.props.length-1])
    if(leftH > (obj.countL * 297 - 10)){
      
      obj.countL = obj.countL + 1;
      leftH = (297* (obj.countL-1)) + marginPage;
      
      obj.left.components.pop();
      obj.left.ids.pop();
      obj.left.props.pop();
      
      obj.left.components.push(VL);
      obj.left.ids.push("vert-l-1");
      obj.left.props.push({top: (297* (obj.countL-1)) + 15});
      
      
      if(obj.countL == 2){
        //console.log(obj.countL, leftH)
        obj.page1.left.components = obj.left.components;
        obj.page1.left.ids = obj.left.ids;
        obj.page1.left.props = obj.left.props;
        //console.log(obj.page1.left.props[obj.page1.left.props.length-1])
      }
      
      obj.left.components.push(LeftBlockSkill);
      obj.left.props.push({top: leftH + marginSec, name: s.value , rating: rating});
      
      leftH = leftH + marginSec + 15;
    }
    
    
  });
  if(obj.countL == 1){
      obj.page1.left.components = obj.left.components;
      obj.page1.left.ids = obj.left.ids;
      obj.page1.left.props = obj.left.props;
    }
  obj.leftH = leftH;
  
  return obj;
}

export default skillInfo;