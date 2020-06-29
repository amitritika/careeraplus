import LeftBlockHeading from "../../../../components/visualresume/fresher/template1/resume/LeftBlockHeading"
import LeftBlockSkill from "../../../../components/visualresume/fresher/template1/resume/LeftBlockSkill"

const skillInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  
  if(leftH > (obj.count * 297)){
    leftH = (297* (obj.countL-1)) + marginPage;
    
  }
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("skill");
  obj.left.props.push({top: leftH + marginSec, name: data.title , height: 9});
  
  leftH = leftH + marginSec + 9;
  
  data.value.map((s, i)=>{
    
    let rating = (parseInt(s.rating) / 5) * 100;
    if (rating > 100){
      rating = 100;
    }
    
    
    obj.left.components.push(LeftBlockSkill);
    obj.left.ids.push("skill");
    obj.left.props.push({top: leftH + marginSec, name: s.value , rating: rating});
    
    leftH = leftH + 2*marginSec + 15;
    
    if(leftH > (obj.countL * 297)){
      
      obj.countL = obj.countL + 1;
      leftH = (297* (obj.countL-1)) + marginPage;
      
      obj.left.components.pop();
      obj.left.ids.pop();
      obj.left.props.pop();
      
      
      
      if(obj.countL == 2){
        
        obj.page1.left.components = obj.left.components;
        obj.page1.left.ids = obj.left.ids;
        obj.page1.left.props = obj.left.props;
       
      }
      
      obj.left.components.push(LeftBlockSkill);
      obj.left.props.push({top: leftH + marginSec, name: s.value , rating: rating});
      
      leftH = leftH + 2*marginSec + 15;
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