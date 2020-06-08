import BlockHeading from "../../../../components/visualresume/expert/template2/resume/BlockHeading"
import RightBlockHeading from "../../../../components/visualresume/expert/template2/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template2/resume/RightBlockLogo"
import RightBlockWorkExp from "../../../../components/visualresume/expert/template2/resume/RightBlockWorkExp"
import RightBlockBullet from "../../../../components/visualresume/expert/template2/resume/RightBlockBullet"
import BlockBullet from "../../../../components/visualresume/expert/template2/resume/BlockBullet"
import {textWidth} from "./template2";

const workExpInfo = (obj, data, marginSec, marginBullet, marginPage) => {
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
    obj.block.props.push({top: rightH + marginSec, name: "cog"});
    
    obj.block.components.push(BlockHeading);
    obj.block.ids.push("workex");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("workex-logo");
    obj.right.props.push({top: rightH + marginSec, name: "cog"});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("workex");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  
 
  data.value.map((v, i)=>{
    let ro = true;
    if(v.role.length == 0){
      ro = false;
    }
    let str = "workex-heading-" + i.toString()
    if(countR > countL){
      obj.block.components.push(RightBlockWorkExp);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate, role: ro});
    
      
    }else{
      obj.right.components.push(RightBlockWorkExp);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate, role: ro});
    
      
    }
    
    rightH = rightH + marginSec + 14;
    
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
            
            obj.block.components.push(RightBlockWorkExp);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate, role: ro});
    
            rightH = rightH + marginSec + 14;
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            
            
            obj.block.components.push(RightBlockWorkExp);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate, role: ro});
    
            rightH = rightH + marginSec + 14;
            
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

          obj.right.components.push(RightBlockWorkExp);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate, role: ro});

          rightH = rightH + marginSec + 14;
        }
    }
    
    v.role.map((r, idx)=>{
      str = "workex-role-" + idx.toString();
      let arr = textWidth("calibri", "normal", "3.2pt", "113px", r);
      let height = arr[0];
      let line = true;
      if(idx == v.role.length -1){
        line = false;
      }
      
      if(countR > countL){
        arr = textWidth("calibri", "normal", "3.2pt", "183px", r);
        height = arr[0];
        obj.block.components.push(BlockBullet);
        obj.block.ids.push(str);
        obj.block.props.push({top: rightH + marginBullet, name: r , height: height, line: line});
      }
      else{
        arr = textWidth("calibri", "normal", "3.2pt", "113px", r);
        height = arr[0];
        obj.right.components.push(RightBlockBullet);
        obj.right.ids.push(str);
        obj.right.props.push({top: rightH + marginBullet, name: r , height: height, line: line});
      }
      
      rightH = rightH + 2*marginBullet + height;
      
      if(rightH > countR * 297){
        countR++;
        rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            obj.right.props[obj.right.props.length-1].line = false
            
            if(countR == 2){
              obj.page1.right.components = obj.right.components;
              obj.page1.right.ids = obj.right.ids;
              obj.page1.right.props = obj.right.props;
            }
            
            arr = textWidth("calibri", "normal", "3.2pt", "183px", r);
            height = arr[0];
            obj.block.components.push(BlockBullet);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginBullet, name: r , height: height, line: line});
            
            rightH = rightH + 2*marginBullet + height;
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            obj.block.props[obj.block.props.length-1].line = false
            arr = textWidth("calibri", "normal", "3.2pt", "183px", r);
            height = arr[0];
            obj.block.components.push(BlockBullet);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginBullet, name: r , height: height, line: line});
            
            rightH = rightH + 2*marginBullet + height;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          obj.right.props[obj.right.props.length-1].line = false
          if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }

          arr = textWidth("calibri", "normal", "3.2pt", "113px", r);
          height = arr[0];
          obj.right.components.push(RightBlockBullet);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginBullet, name: r , height: height, line: line});

          rightH = rightH + 2*marginBullet + height;
        }
        
      }
      
      
    })
    
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

export default workExpInfo;