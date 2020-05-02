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


import Page1 from "../../../../components/visualresume/expert/template1/pages/Page1"
import Page2 from "../../../../components/visualresume/expert/template1/pages/Page2"
import Page3 from "../../../../components/visualresume/expert/template1/pages/Page3"
import Page4 from "../../../../components/visualresume/expert/template1/pages/Page4"
import Page5 from "../../../../components/visualresume/expert/template1/pages/Page5"
import LeftBlock from "../../../../components/visualresume/expert/template1/pages/LeftBlock"
import RightBlock from "../../../../components/visualresume/expert/template1/pages/RightBlock"
import Block from "../../../../components/visualresume/expert/template1/pages/Block"


import UserPhoto from "../../../../components/visualresume/expert/template1/resume/UserPhoto"
import UserName from "../../../../components/visualresume/expert/template1/resume/UserName"

export const colors = [
  {bg: "rgb(1, 51, 66)", font: "rgb(75, 172, 198)"},
  {bg: "rgb(11, 3, 45)", font: "rgb(132, 59, 98)"},
  {bg: "rgb(86, 93, 71)", font: "rgb(180, 156, 115)"},
  {bg: "rgb(43, 46, 74)", font: "rgb(232, 69, 69)"},
  {bg: "rgb(34,40,49)", font: "rgb(48, 71, 94)"},
  ]


export const page = 
      {
       name: Page1,
       blocks: [LeftBlock, RightBlock],
        left: {
          ids: ["left-block-userphoto"],
          props: [{top: 10, left: 13}],
          components: [UserPhoto]
        },
       right: {
          ids: ["right-block-username"],
          props: [{top: 0, left: 6}],
          components: [UserName]
        },
       block: {
          ids: ["block-username"],
          props: [{top: 0, left: 6}],
          components: [UserName]
        },
      }
           

export const pagesRedistribution = (page) => {
  
  let pages = []
  let h = 0;
  let arrLeftIds = page.left.ids;
  let arrLeftProps = page.left.props;
  let arrLeftComp = page.left.components;
  
  let arrRightIds = page.right.ids;
  let arrRightProps = page.right.props;
  let arrRightComp = page.right.components;
  
  let arrBlockIds = page.block.ids;
  let arrBlockProps = page.block.props;
  let arrBlockComp = page.block.components;
  
  let arrIds = page.right.ids;
  
  let removedIds = [];
  let removedProps = [];
  let removedComp = [];

  page.left.ids.map((id, i)=>{
    let obj = {
      name: Page1,
      blocks: [],
      left: {
        ids: [],
        props: [],
        components: []
      },
     right: {
        ids: [],
        props: [],
        components: []
      },
     block: {
        ids: [],
        props: [],
        components: []
      }
    }
    let e = document.getElementById(id);
    let index = arrLeftIds.findIndex(k => k== id);
    h = arrLeftProps[index].top + arrLeftProps[index].height
    
     console.log(h);
    if (h>  297){
      
      if(pages.length == 1){
        obj.name = Page2;
      }
      if(pages.length == 2){
        obj.name = Page3;
      }
      if(pages.length == 3){
        obj.name = Page4;
      }
      if(pages.length == 4){
        obj.name = Page5;
      }
     
      
      obj.blocks.push(LeftBlock);
      let removedIds = arrLeftIds.splice(index);
      let removedProps = arrLeftProps.splice(index);
      let removedComp = arrLeftComp.splice(index);
      obj.left.ids = arrLeftIds;
      obj.left.props = arrLeftProps;
      obj.left.components = arrLeftComp;
      
      arrLeftIds = removedIds;
      arrLeftProps = removedProps;
      arrLeftComp = removedComp;
      
      h = 0;
      
      pages.push(obj);
    }else{
      
    }
  })
  
  
  page.right.ids.map((id, i)=>{
    let obj = {
      name: Page1,
      blocks: [],
      left: {
        ids: [],
        props: [],
        components: []
      },
     right: {
        ids: [],
        props: [],
        components: []
      },
     block: {
        ids: [],
        props: [],
        components: []
      }
    }
    let index = arrRightIds.findIndex(k => k== id);
    let e = document.getElementById(arrIds[index]);
    
    h = arrRightProps[index].top + arrRightProps[index].height;
    
    if (h>  297){
      
      if(pages.length == 1){
        pages[0].blocks = [LeftBlock, RightBlock];
        removedIds = arrRightIds.splice(index);
        removedProps = arrRightProps.splice(index);
        removedComp = arrRightComp.splice(index);
        pages[0].right.ids = arrRightIds;
        pages[0].right.props = arrRightProps;
        pages[0].right.components = arrRightComp;
        
        
        arrRightIds = removedIds;
        arrRightProps = removedProps;
        arrRightComp = removedComp;
        
        removedIds = arrBlockIds.splice(index);
        removedProps = arrBlockProps.splice(index);
        removedComp = arrBlockComp.splice(index);

        obj.name = Page2
        obj.blocks = [Block]
        obj.block.ids = arrBlockIds;
        obj.block.props = arrBlockProps;
        obj.block.components = arrBlockComp;
        
        arrBlockIds = removedIds;
        arrBlockProps = removedProps;
        arrBlockComp = removedComp;
        
        arrIds  = arrBlockIds;
        
        pages.push(obj);
      }
      if(pages.length == 2){
        if(pages[1].blocks[0] == LeftBlock){
          pages[1].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedProps = arrRightProps.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[1].right.ids = arrRightIds;
          pages[1].right.props = arrRightProps;
          pages[1].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightProps = removedProps;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page3
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[1].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[1].block.ids = arrBlockIds;
          pages[1].block.props = arrBlockProps;
          pages[1].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          obj.name = Page3
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 3){
       if(pages[2].blocks[0] == LeftBlock){
          pages[2].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedProps = arrRightProps.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[2].right.ids = arrRightIds;
          pages[2].right.props = arrRightProps;
          pages[2].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightProps = removedProps;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page4
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[2].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[2].block.ids = arrBlockIds;
          pages[2].block.props = arrBlockProps;
          pages[2].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          obj.name = Page4
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 4){
        if(pages[3].blocks[0] == LeftBlock){
          pages[3].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedProps = arrRightProps.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[3].right.ids = arrRightIds;
          pages[3].right.props = arrRightProps;
          pages[3].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightProps = removedProps;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page5
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[3].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[3].block.ids = arrBlockIds;
          pages[3].block.props = arrBlockProps;
          pages[3].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;
          
          obj.name = Page5
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.props = arrBlockProps;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 5){
        if(pages[4].blocks[0] == LeftBlock){
          pages[4].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedProps = arrRightProps.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[4].right.ids = arrRightIds;
          pages[4].right.props = arrRightProps;
          pages[4].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightProps = removedProps;
          arrRightComp = removedComp;
          
          
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          
          pages[4].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedProps = arrBlockProps.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[4].block.ids = arrBlockIds;
          pages[4].block.props = arrBlockProps;
          pages[4].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockProps = removedProps;
          arrBlockComp = removedComp;

        }
      }
 
      
      h = 0;
      
      pages.push(obj);
    }
    
  })
  
  return pages;
}





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
    rightH: 0
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
      obj = extraInfo(obj, visualresume.certificationInformation, marginSec, marginBullet, marginPage, "certificate");
    }
    
    if( q == "achievmentsInfoDisplay" ){
      obj = extraInfo(obj, visualresume.achievmentsInformation, marginSec, marginBullet, marginPage, "award");
    }
    
    if( q == "publicationInfoDisplay" ){
      obj = publicationsInfo(obj, visualresume.publicationInformation, marginSec, marginBullet, marginPage);
    }
  })
  
  page = {
    name: Page1,
       blocks: [LeftBlock, RightBlock],
        left: {
          ids: obj.left.ids,
          props: obj.left.props,
          components: obj.left.components
        },
       right: {
          ids: obj.right.ids,
          props: obj.right.props,
          components: obj.right.components
        },
       block: {
          ids: [],
          props:[],
          components:[]
        },
  }
  
  
  return obj;
}



