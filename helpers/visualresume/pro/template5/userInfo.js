import UserPhoto from "../../../../components/visualresume/pro/template5/resume/UserPhoto"
import UserName from "../../../../components/visualresume/pro/template5/resume/UserName"
import UserDesignation from "../../../../components/visualresume/pro/template5/resume/UserDesignation"
import LeftBlockHeading from "../../../../components/visualresume/pro/template5/resume/LeftBlockHeading"
import LeftBlockContactInfo from "../../../../components/visualresume/pro/template5/resume/LeftBlockContactInfo"
import VL from "../../../../components/visualresume/pro/template5/resume/VL"
import { FaPhone, FaEnvelope, FaHome, FaPassport } from 'react-icons/fa';
import {textWidth} from "./template5";
const userInfo = (obj, name, email, photo, data, marginSec, marginBullet, marginPage)=> {
  
  let leftH = 0;
  let rightH = 0;
  
  if(data.photoDisplay){
    obj.left.components.push(UserPhoto);
    obj.left.ids.push("user-photo-dummy");
    obj.left.props.push({top: 10, photo: photo, height: 45});

    leftH = 10 + 45;
  }
  
  
  
  obj.left.components.push(VL);
  obj.left.ids.push("vert-l-1");
  obj.left.props.push({top: 10, height: 287});
  
  obj.right.components.push(UserName);
  obj.right.ids.push("user-name-dummy");
  obj.right.props.push({top: 0, name: name, height: 13});
  
  rightH = 10 + 13;
  
  obj.right.components.push(UserDesignation);
  obj.right.ids.push("user-designation-dummy");
  obj.right.props.push({top: rightH + 1, name: data.designation, height: 9});
  
  rightH = 44;
  
 
  
  obj.left.components.push(LeftBlockHeading);
  obj.left.ids.push("contact-dummy");
  obj.left.props.push({top: leftH + marginSec, name: "CONTACT", height: 9});
  
  leftH = leftH + marginSec + 9;
  
  obj.left.components.push(LeftBlockContactInfo);
  obj.left.ids.push("contact-phone-dummy");
  obj.left.props.push({top: leftH + marginSec, name: data.phone, icon: FaPhone, height: 5});
  
  leftH = leftH + marginSec + 5;
  
  if(data.phone2.optional){
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push("contact-phone-dummy");
    obj.left.props.push({top: leftH + marginSec, name: data.phone2.value, icon: FaPhone, height: 5});

    leftH = leftH + marginSec + 5;
  }
  
  obj.left.components.push(LeftBlockContactInfo);
  obj.left.ids.push("contact-email-dummy");
  obj.left.props.push({top: leftH + marginSec, name: email, icon: FaEnvelope, height: 5});
  
  leftH = leftH + marginSec + 5;
  
  if(!data.addressFull.optional){
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push("contact-adress-dummy");
    obj.left.props.push({top: leftH + marginSec, name: data.address, icon: FaHome, height: 5});

    leftH = leftH + marginSec + 5;
  }else{
    let arr = textWidth("calibri", "normal", "3.2pt", "62px", data.addressFull.value);
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push("contact-adress-dummy");
    obj.left.props.push({top: leftH + marginSec, name: data.addressFull.value, icon: FaHome, height: arr[0]});
    leftH = leftH + marginSec + arr[0];
  }
  if(data.visa.optional){
    obj.left.components.push(LeftBlockContactInfo);
    obj.left.ids.push("contact-visa-dummy");
    obj.left.props.push({top: leftH + marginSec, name: data.visa.value, icon: FaPassport, height: 5});
    leftH = leftH + marginSec + 5;
  }
  
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

export default userInfo;