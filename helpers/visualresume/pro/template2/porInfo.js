import BlockHeading from "../../../../components/visualresume/expert/template2/resume/BlockHeading"
import RightBlockHeading from "../../../../components/visualresume/pro/template2/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/pro/template2/resume/RightBlockLogo"
import RightBlockPor from "../../../../components/visualresume/pro/template2/resume/RightBlockPor"
import BlockPor from "../../../../components/visualresume/pro/template2/resume/BlockPor"
import {textWidth} from "./template2";
import { FaUserCog } from "react-icons/fa";
const porInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let tH = 0;
  
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
    obj.block.ids.push("project-logo");
    obj.block.props.push({top: rightH + marginSec, name: FaUserCog});
    
    obj.block.components.push(BlockHeading);
    obj.block.ids.push("project");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("project-logo");
    obj.right.props.push({top: rightH + marginSec, name: FaUserCog});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("project");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            if(countR == 2){
              obj.page1.right.components = obj.right.components;
              obj.page1.right.ids = obj.right.ids;
              obj.page1.right.props = obj.right.props;
            }
            
            obj.block.components.push(RightBlockLogo);
            obj.block.ids.push("project-logo");
            obj.block.props.push({top: rightH + marginSec, name: FaUserCog});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
            
            rightH = rightH + marginSec + 13;
    
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
           
            obj.block.components.push(RightBlockLogo);
            obj.block.ids.push("project-logo");
            obj.block.props.push({top: rightH + marginSec, name: FaUserCog});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
            
            rightH = rightH + marginSec + 13;
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          if(countR == 2){
            obj.page1.right.components = obj.right.components;
            obj.page1.right.ids = obj.right.ids;
            obj.page1.right.props = obj.right.props;
          }
          
          
          obj.right.components.push(RightBlockLogo);
          obj.right.ids.push("project-logo");
          obj.right.props.push({top: rightH + marginSec, name: FaUserCog});

          obj.right.components.push(RightBlockHeading);
          obj.right.ids.push("project");
          obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
          
          rightH = rightH + marginSec + 13;
        
        }
    }
 
  data.value.map((v, i)=>{
    
    let str = "project-heading-" + i.toString();
    let arrd = textWidth("calibri", "normal", "3.2pt", "113px", v.desc);
    let arrt = textWidth("calibri", "normal", "3.2pt", "113px", v.title);
    let height = arrd[0] + arrt[0];
    if(countR > countL){
      arrd = textWidth("calibri", "normal", "3.2pt", "183px", v.desc);
      arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.title);
      height = arrd[0] + arrt[0];
      obj.block.components.push(BlockPor);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: height, data: v});
      
      if(v.event.optional || v.date.optional){
        rightH = rightH + marginSec + height + tH;
      }else{
        rightH = rightH + marginSec + height;
      }
      
    }else{
      obj.right.components.push(RightBlockPor);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: height, data: v});
      
      if(v.event.optional || v.date.optional){
        rightH = rightH + marginSec + height + tH;
      }else{
        rightH = rightH + marginSec + height;
      }
      
    }
    
    
    
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
            arrd = textWidth("calibri", "normal", "3.2pt", "183px", v.desc);
            arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.titile);
            height = arrd[0] + arrt[0];
            obj.block.components.push(BlockPor);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
    
            if(v.event.optional || v.date.optional){
              rightH = rightH + marginSec + height + tH;
            }else{
              rightH = rightH + marginSec + height;
            }
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            arrd = textWidth("calibri", "normal", "3.2pt", "183px", v.desc);
            arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.titile);
            height = arrd[0] + arrt[0];
            obj.block.components.push(BlockPor);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
    
            if(v.event.optional || v.date.optional){
              rightH = rightH + marginSec + height + tH;
            }else{
              rightH = rightH + marginSec + height;
            }
            
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
          
          arrd = textWidth("calibri", "normal", "3.2pt", "113px", v.desc);
          arrt = textWidth("calibri", "normal", "3.2pt", "113px", v.titile);
          height = arrd[0] + arrt[0];

          obj.right.components.push(RightBlockPor);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: height, data: v});
          if(v.event.optional || v.date.optional){
            rightH = rightH + marginSec + height + tH;
          }else{
            rightH = rightH + marginSec + height;
          }
        }
    }
    
  })
  
  
  if(countR > countL){
    
    obj.block.props.push({top: (297 * (countR-1))  + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
  }else{
    if(countR == 1){
      
      obj.right.props.push({top: 60, height: 230});
      
      if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
    }else{
      
      obj.right.props.push({top: (297 * (countR-1)) + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
    }
    
  }
  obj.countL = countL;
  obj.countR = countR;
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

               

export default porInfo;