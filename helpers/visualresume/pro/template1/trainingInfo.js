import VL from "../../../../components/visualresume/pro/template1/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/pro/template1/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/pro/template1/resume/RightBlockLogo"
import RightBlockTraining from "../../../../components/visualresume/pro/template1/resume/RightBlockTraining"
import BlockTraining from "../../../../components/visualresume/pro/template1/resume/BlockTraining"
import RightBlockBullet from "../../../../components/visualresume/pro/template1/resume/RightBlockBullet"
import BlockBullet from "../../../../components/visualresume/pro/template1/resume/BlockBullet"
import {textWidthL} from "./template1";
import { FaCogs} from 'react-icons/fa';
const trainingInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
    if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("workex-logo");
    obj.block.props.push({top: rightH + marginSec, name: FaCogs});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("workex");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("workex-logo");
    obj.right.props.push({top: rightH + marginSec, name: FaCogs});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("workex");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  
 
  data.value.map((v, i)=>{
   
    let str = "workex-heading-" + i.toString()
    let arr = textWidthL("calibri", "normal", "2.5pt", "113px", v.desc);
    let height = arr[0];
    if(countR > countL){
      obj.block.components.push(BlockTraining);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: 12+height, org: v.org ,type: v.type, startD: v.startDate, endD: v.endDate, desc: v.desc});
    
      
    }else{
      obj.right.components.push(RightBlockTraining);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: 12+height, org: v.org ,type: v.type, startD: v.startDate, endD: v.endDate, desc: v.desc});
    
      
    }
    
    rightH = rightH + marginBullet + 12+height;
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            if(countR == 2){
              obj.page1.right.components = obj.right.components;
              obj.page1.right.ids = obj.right.ids;
              obj.page1.right.props = obj.right.props;
            }
            
            obj.block.components.push(BlockTraining);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 12+height, org: v.org ,type: v.type, startD: v.startDate, endD: v.endDate, desc: v.desc});
    
            rightH = rightH + marginBullet + 12+height;
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            
            
            obj.block.components.push(BlockTraining);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 12+height, org: v.org ,type: v.type, startD: v.startDate, endD: v.endDate, desc: v.desc});
    
            rightH = rightH + marginBullet + 12+height;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }

          obj.right.components.push(RightBlockTraining);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: 12+height, org: v.org ,type: v.type, startD: v.startDate, endD: v.endDate, desc: v.desc});

          rightH = rightH + marginBullet + 12+height;
        }
    }
    

    
  })
  
  if(countR > countL){
    obj.block.components.push(VL);
    obj.block.props.push({top: (297 * (countR-1))  + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
  }else{
    if(countR == 1){
      obj.right.components.push(VL);
      obj.right.props.push({top: 60, height: 230});
      obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
    }else{
      obj.right.components.push(VL);
      obj.right.props.push({top: (297 * (countR-1)) + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
    }
    
  }
  obj.countL = countL;
  obj.countR = countR;
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

export default trainingInfo;