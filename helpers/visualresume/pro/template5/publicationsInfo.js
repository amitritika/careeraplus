import VL from "../../../../components/visualresume/pro/template5/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/pro/template5/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/pro/template5/resume/RightBlockLogo"
import RightBlockPub from "../../../../components/visualresume/pro/template5/resume/RightBlockPub"
import BlockPub from "../../../../components/visualresume/pro/template5/resume/BlockPub"
import {textWidth} from "./template5";
import { FaBook } from "react-icons/fa";
const publicationsInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let tH = 2;
  
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
    obj.block.ids.push("pub-logo");
    obj.block.props.push({top: rightH, name: FaBook});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("pub");
    obj.block.props.push({top: rightH, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("pub-logo");
    obj.right.props.push({top: rightH, name: FaBook});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("pub");
    obj.right.props.push({top: rightH, name: data.title , height: 13});
  }
  
  
  rightH = rightH + 3;
  
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
            obj.block.props.push({top: rightH, name: FaBook});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH, name: data.title , height: 13});
            
            rightH = rightH + 3;
    
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
           
            obj.block.components.push(RightBlockLogo);
            obj.block.ids.push("project-logo");
            obj.block.props.push({top: rightH, name: FaBook});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH, name: data.title , height: 13});
            
            rightH = rightH + 3;
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
          obj.right.props.push({top: rightH, name: FaBook});

          obj.right.components.push(RightBlockHeading);
          obj.right.ids.push("project");
          obj.right.props.push({top: rightH, name: data.title , height: 13});
          
          rightH = rightH + 3;
        
        }
    }
 
  data.value.map((v, i)=>{
    
    let str = "project-heading-" + i.toString();
    let arrj = textWidth("calibri", "normal", "3.2pt", "113px", v.journal);
    let arrt = textWidth("calibri", "normal", "3.2pt", "113px", v.titile);
    let height = arrj[0] + arrt[0];
    if(countR > countL){
      arrj = textWidth("calibri", "normal", "3.2pt", "183px", v.journal);
      arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.titile);
      height = arrj[0] + arrt[0];
      obj.block.components.push(BlockPub);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + 2*marginSec + tH, height: height, data: v});
      rightH = rightH + 2*marginSec + tH + height;
      
      
    }else{
      obj.right.components.push(RightBlockPub);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + 2*marginSec + tH, height: height, data: v});
      rightH = rightH + 2*marginSec + tH + height;
      
      
    }
    
    
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            arrj = textWidth("calibri", "normal", "3.2pt", "183px", v.journal);
            arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.titile);
            height = arrj[0] + arrt[0];
            obj.block.components.push(BlockPub);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + 2*marginSec + tH, height: height, data: v});
            rightH = rightH + 2*marginSec + tH + height;
            
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            arrj = textWidth("calibri", "normal", "3.2pt", "183px", v.journal);
            arrt = textWidth("calibri", "normal", "3.2pt", "183px", v.titile);
            height = arrj[0] + arrt[0];
            obj.block.components.push(BlockPub);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + 2*marginSec + tH, height: height, data: v});
            rightH = rightH + 2*marginSec + tH + height;
            
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
          
          arrj = textWidth("calibri", "normal", "3.2pt", "113px", v.journal);
          arrt = textWidth("calibri", "normal", "3.2pt", "113px", v.titile);
          height = arrj[0] + arrt[0];

          obj.right.components.push(RightBlockPub);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + 2*marginSec + tH, height: height, data: v});
         rightH = rightH + 2*marginSec + tH + height;
        }
    }
    
  })
  
  
  if(countR == 1){
     
      obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
    }
  obj.countL = countL;
  obj.countR = countR;
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

               

export default publicationsInfo;