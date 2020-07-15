import userInfo from "./userInfo"
import profileSummary from "./profileSummary"
import workExpInfo from "./workExpInfo"
import compInfo from "./compInfo"
import skillInfo from "./skillInfo"
import projectInfo from "./projectInfo"
import educationInfo from "./educationInfo"
import extraInfo from "./extraInfo"
import publicationsInfo from "./publicationsInfo"
import hobbiesInfo from "./hobbiesInfo"
import porInfo from "./porInfo"
import trainingInfo from "./trainingInfo"
import {FaCertificate, FaAward} from "react-icons/fa"


import LeftBlock from "../../../../components/visualresume/pro/template3/pages/LeftBlock"
import RightBlock from "../../../../components/visualresume/pro/template3/pages/RightBlock"
import Block from "../../../../components/visualresume/pro/template3/pages/Block"


import UserPhoto from "../../../../components/visualresume/pro/template3/resume/UserPhoto"
import UserName from "../../../../components/visualresume/pro/template3/resume/UserName"

export const colors = [
  {bg: "rgb(0, 141, 125)", font: "rgb(131, 130, 128)"},
  {bg: "rgb(11, 3, 45)", font: "rgb(132, 59, 98)"},
  {bg: "rgb(86, 93, 71)", font: "rgb(180, 156, 115)"},
  {bg: "rgb(43, 46, 74)", font: "rgb(232, 69, 69)"},
  {bg: "rgb(34,40,49)", font: "rgb(48, 71, 94)"},
  ]



export const componentSequence = (visualresume, name, email, photo)=> {
  let list = visualresume.layout.listLR
  let leftH = 0;
  let rightH = 0;
  let marginSec = 2;
  let marginBullet = 1;
  let marginPage = 15;
  let arr = [];
  let page = {};
  let obj = {
    left: {
      components: [],
      ids: [],
      props: [],
    },
    
    right: {
      components: [],
      ids: [],
      props: [],
    },
    
    block:{
      components: [],
      ids: [],
      props: [],
   },
    countL: 1,
    countR: 1,
    leftH: 0,
    rightH: 0,
    page1: {
      left: {
      components: [],
      ids: [],
      props: [],
    },
    
    right: {
      components: [],
      ids: [],
      props: [],
    }, 
      leftH: 0,
      rightH: 0,
  }
  }
  
  list.left.map((q,i)=>{
    if( q == "userInfoDisplay" ){
      obj = userInfo(obj, name, email, photo, visualresume.personalInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "profileSummaryInfoDisplay" ){
      obj = profileSummary(obj, visualresume.profileSummaryInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "techSkillsInfoDisplay" ){
      obj = skillInfo(obj, visualresume.techSkillsInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "toolSkillsInfoDisplay" ){
      obj = skillInfo(obj, visualresume.toolSkillsInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "progSkillsInfoDisplay" ){
      obj = skillInfo(obj, visualresume.progSkillsInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "softSkillsInfoDisplay" ){
      obj = skillInfo(obj, visualresume.softSkillsInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "hobbiesInfoDisplay" ){
      obj = hobbiesInfo(obj, visualresume.hobbiesInformation, marginSec, marginBullet, marginPage);
    }
  })
  
  list.right.map((q,i)=>{
    if( q == "workexpInfoDisplay" ){
      obj = workExpInfo(obj, visualresume.workexpInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "competenciesInfoDisplay" ){
      obj = compInfo(obj, visualresume.competenciesInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "projectsInfoDisplay" ){
      obj = projectInfo(obj, visualresume.projectsInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "educationInfoDisplay" ){
      obj = educationInfo(obj, visualresume.educationInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "certificationInfoDisplay" ){
      obj = extraInfo(obj, visualresume.certificationInformation, marginSec, marginBullet, marginPage, FaCertificate);
    }
    
    if( q == "achievmentsInfoDisplay" ){
      obj = extraInfo(obj, visualresume.achievmentsInformation, marginSec, marginBullet, marginPage, FaAward);
    }
    
    if( q == "publicationInfoDisplay" ){
      obj = publicationsInfo(obj, visualresume.publicationInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "porInfoDisplay" ){
      obj = porInfo(obj, visualresume.porInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "trainingInfoDisplay" ){
      obj = trainingInfo(obj, visualresume.trainingInformation, marginSec, marginBullet, marginPage);
    }
  })
  

  
  
  return obj;
}

export const textWidth = (fontf, weight, size, width, name) => {
  let t = document.getElementById("text");
  t.style.fontSize = size;
  t.style.fontFamily = fontf;
  t.style.fontWeight = weight;
  t.style.height = "auto";
  t.style.width = width;
  t.innerHTML = name;
  //console.log(t.clientHeight + 1, t.clientWidth+1);
  
  return [t.clientHeight + 1, t.clientWidth+1]
}


export const textWidthL = (fontf, weight, size, width, name) => {
  let t = document.getElementById("text");
  t.style.fontSize = size;
  t.style.fontFamily = fontf;
  t.style.fontWeight = weight;
  t.style.height = "auto";
  t.style.width = width;
  t.style.lineHeight = "3.2pt";
  t.innerHTML = name;
  //console.log(t.clientHeight + 1, t.clientWidth+1);
  
  return [t.clientHeight + 1, t.clientWidth+1]
}
