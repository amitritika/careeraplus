import Page1 from "../../../components/visualresume/expert/template1/pages/Page1"
import Page2 from "../../../components/visualresume/expert/template1/pages/Page2"
import Page3 from "../../../components/visualresume/expert/template1/pages/Page3"
import Page4 from "../../../components/visualresume/expert/template1/pages/Page4"
import Page5 from "../../../components/visualresume/expert/template1/pages/Page5"
import LeftBlock from "../../../components/visualresume/expert/template1/pages/LeftBlock"
import RightBlock from "../../../components/visualresume/expert/template1/pages/RightBlock"
import Block from "../../../components/visualresume/expert/template1/pages/Block"


import UserPhoto from "../../../components/visualresume/expert/template1/resume/UserPhoto"
import UserName from "../../../components/visualresume/expert/template1/resume/UserName"

export const page = 
      {
       name: Page1,
       blocks: [LeftBlock, RightBlock],
        left: {
          ids: ["left-block-userphoto"],
          style: [{top: 10, left: 13}],
          components: [UserPhoto]
        },
       right: {
          ids: ["right-block-username"],
          style: [{top: 0, left: 6}],
          components: [UserName]
        },
       block: {
          ids: ["block-username"],
          style: [{top: 0, left: 6}],
          components: [UserName]
        },
      }
           

export const pagesRedistribution = (page, fac) => {
  
  let pages = []
  let h = 0;
  let arrLeftIds = page.left.ids;
  let arrLeftStyle = page.left.style;
  let arrLeftComp = page.left.components;
  
  let arrRightIds = page.right.ids;
  let arrRightStyle = page.right.style;
  let arrRightComp = page.right.components;
  
  let arrBlockIds = page.block.ids;
  let arrBlockStyle = page.block.style;
  let arrBlockComp = page.block.components;
  
  let arrIds = page.right.ids;
  
  let removedIds = [];
  let removedStyle = [];
  let removedComp = [];
 
  page.left.ids.map((id, i)=>{
    let obj = {
      name: Page1,
      blocks: [],
      left: {
        ids: [],
        style: [],
        components: []
      },
     right: {
        ids: [],
        style: [],
        components: []
      },
     block: {
        ids: [],
        style: [],
        components: []
      }
    }
    let e = document.getElementById(id);
    let index = arrLeftIds.findIndex(k => k== id);
    h = h + e.offsetHeight
    if (h> fac*297){
      
      if(pages.length == 1){
        obj.name = Page1;
      }
      if(pages.length == 2){
        obj.name = Page2;
      }
      if(pages.length == 3){
        obj.name = Page3;
      }
      if(pages.length == 4){
        obj.name = Page4;
      }
      if(pages.length == 5){
        obj.name = Page5;
      }
      
      obj.blocks.push(LeftBlock);
      let removedIds = arrLeftIds.splice(index);
      let removedStyle = arrLeftStyle.splice(index);
      let removedComp = arrLeftComp.splice(index);
      obj.left.ids = arrLeftIds;
      obj.left.style = arrLeftStyle;
      obj.left.components = arrLeftComp;
      
      arrLeftIds = removedIds;
      arrLeftStyle = removedStyle;
      arrLeftComp = removedComp;
      
      h = 0;
      
      pages.push(obj);
    }
  })
  
  
  page.right.ids.map((id, i)=>{
    let obj = {
      name: Page1,
      blocks: [],
      left: {
        ids: [],
        style: [],
        components: []
      },
     right: {
        ids: [],
        style: [],
        components: []
      },
     block: {
        ids: [],
        style: [],
        components: []
      }
    }
    let index = arrRightIds.findIndex(k => k== id);
    let e = document.getElementById(arrIds[index]);
    
    h = h + e.offsetHeight;
    
    if (h> fac*297){
      
      if(pages.length == 1){
        pages[0].blocks = [LeftBlock, RightBlock];
        removedIds = arrRightIds.splice(index);
        removedStyle = arrRightStyle.splice(index);
        removedComp = arrRightComp.splice(index);
        pages[0].right.ids = arrRightIds;
        pages[0].right.style = arrRightStyle;
        pages[0].right.components = arrRightComp;
        
        
        arrRightIds = removedIds;
        arrRightStyle = removedStyle;
        arrRightComp = removedComp;
        
        removedIds = arrBlockIds.splice(index);
        removedStyle = arrBlockStyle.splice(index);
        removedComp = arrBlockComp.splice(index);

        obj.name = Page2
        obj.blocks = [Block]
        obj.block.ids = arrBlockIds;
        obj.block.style = arrBlockStyle;
        obj.block.components = arrBlockComp;
        
        arrBlockIds = removedIds;
        arrBlockStyle = removedStyle;
        arrBlockComp = removedComp;
        
        arrIds  = arrBlockIds;
        
        pages.push(obj);
      }
      if(pages.length == 2){
        if(pages[1].blocks[0] == LeftBlock){
          pages[1].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedStyle = arrRightStyle.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[1].right.ids = arrRightIds;
          pages[1].right.style = arrRightStyle;
          pages[1].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightStyle = removedStyle;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page3
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[1].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[1].block.ids = arrBlockIds;
          pages[1].block.style = arrBlockStyle;
          pages[1].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          obj.name = Page3
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 3){
       if(pages[2].blocks[0] == LeftBlock){
          pages[2].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedStyle = arrRightStyle.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[2].right.ids = arrRightIds;
          pages[2].right.style = arrRightStyle;
          pages[2].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightStyle = removedStyle;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page4
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[2].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[2].block.ids = arrBlockIds;
          pages[2].block.style = arrBlockStyle;
          pages[2].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          obj.name = Page4
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 4){
        if(pages[3].blocks[0] == LeftBlock){
          pages[3].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedStyle = arrRightStyle.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[3].right.ids = arrRightIds;
          pages[3].right.style = arrRightStyle;
          pages[3].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightStyle = removedStyle;
          arrRightComp = removedComp;
          
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);

          obj.name = Page5
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          arrIds  = arrBlockIds;
          
          pages.push(obj);
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          pages[3].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[3].block.ids = arrBlockIds;
          pages[3].block.style = arrBlockStyle;
          pages[3].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;
          
          obj.name = Page5
          obj.blocks = [Block]
          obj.block.ids = arrBlockIds;
          obj.block.style = arrBlockStyle;
          obj.block.components = arrBlockComp;

          arrIds  = arrBlockIds;
          
          pages.push(obj);
        }
      }
      if(pages.length == 5){
        if(pages[4].blocks[0] == LeftBlock){
          pages[4].blocks = [LeftBlock, RightBlock];
          removedIds = arrRightIds.splice(index);
          removedStyle = arrRightStyle.splice(index);
          removedComp = arrRightComp.splice(index);
          pages[4].right.ids = arrRightIds;
          pages[4].right.style = arrRightStyle;
          pages[4].right.components = arrRightComp;
          
          arrRightIds = removedIds;
          arrRightStyle = removedStyle;
          arrRightComp = removedComp;
          
          
          
        }else{
          removedIds = arrRightIds.splice(index);
          arrRightIds = removedIds;
          
          pages[4].blocks = [Block];
          removedIds = arrBlockIds.splice(index);
          removedStyle = arrBlockStyle.splice(index);
          removedComp = arrBlockComp.splice(index);
          pages[4].block.ids = arrBlockIds;
          pages[4].block.style = arrBlockStyle;
          pages[4].block.components = arrBlockComp;
          
          arrBlockIds = removedIds;
          arrBlockStyle = removedStyle;
          arrBlockComp = removedComp;

        }
      }
 
      
      h = 0;
      
      pages.push(obj);
    }
    
  })
  
  return pages;
}
