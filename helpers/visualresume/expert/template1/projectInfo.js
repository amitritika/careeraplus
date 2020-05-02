import VL from "../../../../components/visualresume/expert/template1/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/expert/template1/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template1/resume/RightBlockLogo"
import RightBlockProject from "../../../../components/visualresume/expert/template1/resume/RightBlockProject"
import BlockProject from "../../../../components/visualresume/expert/template1/resume/BlockProject"

const projectInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let tH = 0;
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("project-logo");
    obj.block.props.push({top: rightH + marginSec, name: "cog"});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("project");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("project-logo");
    obj.right.props.push({top: rightH + marginSec, name: "cog"});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("project");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  
 
  data.value.map((v, i)=>{
    
    let str = "project-heading-" + i.toString();
    let height = (Math.floor(v.desc.length/60) + 2) * 5 + (Math.floor(v.title.length/60) + 2) * 5;
    if(countR > countL){
      height = (Math.floor(v.desc.length/100) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
      obj.block.components.push(BlockProject);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: height, data: v});
      
      if(v.designation.optional || v.client.optional || v.date.optional){
        rightH = rightH + marginSec + height + tH;
      }else{
        rightH = rightH + marginSec + height;
      }
      
    }else{
      obj.right.components.push(RightBlockProject);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: height, data: v});
      
      if(v.designation.optional || v.client.optional || v.date.optional){
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
            height = (Math.floor(v.desc.length/100) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
            obj.block.components.push(BlockProject);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
    
            if(v.designation.optional || v.client.optional || v.date.optional){
              rightH = rightH + marginSec + height + tH;
            }else{
              rightH = rightH + marginSec + height;
            }
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            height = (Math.floor(v.desc.length/100) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
            obj.block.components.push(BlockProject);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
    
            if(v.designation.optional || v.client.optional || v.date.optional){
              rightH = rightH + marginSec + height + tH;
            }else{
              rightH = rightH + marginSec + height;
            }
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          height = (Math.floor(v.desc.length/60) + 2) * 5 + (Math.floor(v.title.length/60) + 2) * 5;

          obj.right.components.push(RightBlockProject);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: height, data: v});
          if(v.designation.optional || v.client.optional || v.date.optional){
            rightH = rightH + marginSec + height + tH;
          }else{
            rightH = rightH + marginSec + height;
          }
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

               

export default projectInfo;