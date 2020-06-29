import userInfo from "./userInfo"
import profileSummary from "./profileSummary"
import workExpInfo from "./workExpInfo"
import skillInfo from "./skillInfo"
import projectInfo from "./projectInfo"
import educationInfo from "./educationInfo"
import extraInfo from "./extraInfo"
import hobbiesInfo from "./hobbiesInfo"
import areaInfo from "./areaInfo"


import LeftBlock from "../../../../components/visualresume/fresher/template1/pages/LeftBlock"
import RightBlock from "../../../../components/visualresume/fresher/template1/pages/RightBlock"
import { FaAward} from 'react-icons/fa';


export const colors = [
  {bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)"},
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
  let marginPage = 5;
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
      obj = userInfo(obj, name, email, photo, visualresume.pesrsonalInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "profileSummaryInfoDisplay" ){
      obj = profileSummary(obj, visualresume.pesrsonalInformation.aboutMe, visualresume.pesrsonalInformation.title,marginSec, marginBullet, marginPage);
    }
    
    if( q == "techSkillsInfoDisplay" ){
      obj = skillInfo(obj, visualresume.skills, marginSec, marginBullet, marginPage);
    }
    
    
    if( q == "hobbiesInfoDisplay" ){
      obj = hobbiesInfo(obj, visualresume.hobbies, marginSec, marginBullet, marginPage);
    }
  })
  
  list.right.map((q,i)=>{
    if( q == "workexpInfoDisplay" ){
      obj = workExpInfo(obj, visualresume.trainingInformation, marginSec, marginBullet, marginPage);
    }
    
   
    if( q == "projectsInfoDisplay" ){
      obj = projectInfo(obj, visualresume.projectInformation, marginSec, marginBullet, marginPage);
    }
    
    if( q == "educationInfoDisplay" ){
      obj = educationInfo(obj, visualresume.educationalInformation, marginSec, marginBullet, marginPage);
    }
  
    if( q == "achievmentsInfoDisplay" ){
      obj = extraInfo(obj, visualresume.extraCurricular, marginSec, marginBullet, marginPage, FaAward);
    }
    
    if( q == "areaOfIntrestInfoDisplay" ){
      obj = areaInfo(obj, visualresume.areaOfIntrest, marginSec, marginBullet, marginPage);
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


