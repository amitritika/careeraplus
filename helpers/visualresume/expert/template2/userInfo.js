import UserPhoto from "../../../../components/visualresume/expert/template2/resume/UserPhoto"
import UserName from "../../../../components/visualresume/expert/template2/resume/UserName"
import UserDesignation from "../../../../components/visualresume/expert/template2/resume/UserDesignation"
import LeftBlockHeading from "../../../../components/visualresume/expert/template2/resume/LeftBlockHeading"
import LeftBlockContactInfo from "../../../../components/visualresume/expert/template2/resume/LeftBlockContactInfo"

const userInfo = (obj, name, email, photo, data, marginSec, marginBullet, marginPage)=> {
  
  let leftH = 0;
  let rightH = 0;
  
  
  obj.left.components.push(UserPhoto);
  obj.left.ids.push("user-photo-dummy");
  obj.left.props.push({top: 15, photo: photo, height: 45, marginL: 7, marginR: 7, marginT: 5, marginB: 5, r: 2});
  
  leftH = 15 + 45 * 1.2;
  
  obj.right.components.push(UserName);
  obj.right.ids.push("user-name-dummy");
  obj.right.props.push({top: 0, name: name, height: 13});
  
  rightH = 0 + 13;
  
  obj.right.components.push(UserDesignation);
  obj.right.ids.push("user-designation-dummy");
  obj.right.props.push({top: rightH + 1, name: data.designation, height: 9});
  
  rightH = rightH + 1 + 9 + 7;
 
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("contact-dummy");
  obj.left.props.push({top: leftH + marginSec, name: "CONTACT", height: 9});
  
  leftH = leftH + marginSec + 9;
  
  obj.left.components.push(LeftBlockContactInfo);
  obj.left.ids.push("contact-phone-dummy");
  obj.left.props.push({top: leftH + marginSec, name: data.phone, icon: "phone", height: 5});
  
  leftH = leftH + marginSec + 5;
  
  obj.left.components.push(LeftBlockContactInfo);
  obj.left.ids.push("contact-email-dummy");
  obj.left.props.push({top: leftH + marginSec, name: email, icon: "envelope", height: 5});
  
  leftH = leftH + marginSec + 5;
  
  obj.left.components.push(LeftBlockContactInfo);
  obj.left.ids.push("contact-adress-dummy");
  obj.left.props.push({top: leftH + marginSec, name: data.address, icon: "home", height: 5});
  
  leftH = leftH + marginSec + 5;
  console.log(data)
  if(data.visa.optional){
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push("contact-visa-dummy");
    obj.left.props.push({top: leftH + marginSec, name: data.visa.value, icon: "passport", height: 5});
    leftH = leftH + marginSec + 5;
  }
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

export default userInfo;