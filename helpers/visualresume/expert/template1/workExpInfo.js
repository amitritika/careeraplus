import VL from "../../../../components/visualresume/expert/template1/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/expert/template1/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template1/resume/RightBlockLogo"
import RightBlockWorkExp from "../../../../components/visualresume/expert/template1/resume/RightBlockWorkExp"
import RightBlockBullet from "../../../../components/visualresume/expert/template1/resume/RightBlockBullet"
import BlockBullet from "../../../../components/visualresume/expert/template1/resume/BlockBullet"

const workExpInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("workex-logo");
    obj.block.props.push({top: rightH + marginSec, name: "cog"});
    
    obj.block.components.push(RightBlockHeading);
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
    
    let str = "workex-heading-" + i.toString()
    if(countR > countL){
      obj.block.components.push(RightBlockWorkExp);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate});
    
      
    }else{
      obj.right.components.push(RightBlockWorkExp);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate});
    
      
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
            
            obj.block.components.push(RightBlockWorkExp);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate});
    
            rightH = rightH + marginSec + 14;
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            obj.block.components.push(RightBlockWorkExp);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate});
    
            rightH = rightH + marginSec + 14;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();

          obj.right.components.push(RightBlockWorkExp);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: 14, org: v.org ,desg: v.designation, startD: v.startDate, endD: v.endDate});

          rightH = rightH + marginSec + 14;
        }
    }
    
    v.role.map((r, idx)=>{
      str = "workex-role-" + idx.toString();
      let height = 0;
      
      if(countR > countL){
        height = (Math.floor(r.length/100) + 2) * 5;
        obj.block.components.push(BlockBullet);
        obj.block.ids.push(str);
        obj.block.props.push({top: rightH + marginBullet, name: r , height: height});
      }
      else{
        height = (Math.floor(r.length/60) + 2) * 5;
        obj.right.components.push(RightBlockBullet);
        obj.right.ids.push(str);
        obj.right.props.push({top: rightH + marginBullet, name: r , height: height});
      }
      
      rightH = rightH + marginBullet + height;
      
      if(rightH > countR * 297){
        countR++;
        rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            height = (Math.floor(r.length/100) + 2) * 5;
            obj.block.components.push(BlockBullet);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginBullet, name: r , height: height});
            
            rightH = rightH + marginBullet + height;
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            height = (Math.floor(r.length/100) + 2) * 5;
            obj.block.components.push(BlockBullet);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginBullet, name: r , height: height});
            
            rightH = rightH + marginBullet + height;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();

          height = (Math.floor(r.length/100) + 2) * 5;
          obj.right.components.push(RightBlockBullet);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginBullet, name: r , height: height});

          rightH = rightH + marginBullet + height;
        }
        
      }
      
      
    })
    
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

export default workExpInfo;