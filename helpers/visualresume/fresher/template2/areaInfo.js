
import RightBlockHeading from "../../../../components/visualresume/fresher/template2/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/fresher/template2/resume/RightBlockLogo"
import RightBlockArea from "../../../../components/visualresume/fresher/template2/resume/RightBlockArea"
import {iconList} from "../../fresher"
import {FaBook} from 'react-icons/fa';

const areaInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let list = ["area1", "area2", "area3"];
  let left = 15;
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
    obj.block.ids.push("education-logo");
    obj.block.props.push({top: rightH + marginSec, name: "book"});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("education");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("education-logo");
    obj.right.props.push({top: rightH + marginSec, name: FaBook});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("education");
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
            obj.block.props.push({top: rightH + marginSec, name: FaBook});

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
            obj.block.props.push({top: rightH + marginSec, name: FaBook});

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
          obj.right.props.push({top: rightH + marginSec, name: FaBook});

          obj.right.components.push(RightBlockHeading);
          obj.right.ids.push("project");
          obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
          
          rightH = rightH + marginSec + 13;
        
        }
    }
 
  list.map((v, i)=>{
    
    
    
    let str = "area-heading-" + i.toString();
    let areaT = v + "Topic"
    
    if(countR > countL){
      
      obj.block.components.push(BlockEdu);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: 10, data: v});
      
      rightH = rightH + marginSec +  10
      
    }else{
      obj.right.components.push(RightBlockArea);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, name: data[areaT], logo: iconList[data[areaT]], left: left});
      
     
      
    }
    
    
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            obj.block.components.push(BlockEdu);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 10, data: v});
    
            rightH = rightH + marginSec +  10
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            
            
            obj.block.components.push(BlockEdu);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 10, data: v});
    
            rightH = rightH + marginSec +  10
            
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

          obj.right.components.push(RightBlockArea);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, name: data[areaT], logo: iconList[data[areaT]], left: left});
          
        }
    }
    
    left = left + 32;
  })
  
  rightH = rightH + marginSec +  15
  if(countR > countL){
    obj.block.props.push({top: (297 * (countR-1))  + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
  }else{
    if(countR == 1){
      
      
      obj.page1.right.components = obj.right.components;
      obj.page1.right.ids = obj.right.ids;
      obj.page1.right.props = obj.right.props;
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

export default areaInfo;