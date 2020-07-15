import LeftBlock from "./LeftBlock"
import RightBlock from "./RightBlock"
import Block from "./Block"


const Page5 = (props) => {
  
 
  let pages = props.pages
  const showBlocks = () => {
    return(
    
    pages[4].blocks.map((c, i)=>{
      let BlockComponent = c;
      let id = ""
      if (c== LeftBlock) {
        id = "left-block-" + "page5"
        return <BlockComponent block = {pages[4].left} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }
      else if (c == RightBlock) {
        id = "right-block-" + "page5"
        return <BlockComponent block = {pages[4].right} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }else{
        id = "block-" + "page5"
        return <BlockComponent block = {pages[4].block} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }
      
    })
      )
  }
  
  return(
    <React.Fragment>
      {showBlocks()}
    </React.Fragment>
    
  )
}

export default Page5;