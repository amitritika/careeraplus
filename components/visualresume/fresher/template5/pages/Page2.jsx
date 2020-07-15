import LeftBlock from "./LeftBlock"
import RightBlock from "./RightBlock"
import Block from "./Block"

const Page2 = (props) => {
  let pages = props.pages
  const showBlocks = () => {
    return(
    
    pages[1].blocks.map((c, i)=>{
      let BlockComponent = c;
      let id = ""
      if (c== LeftBlock) {
        id = "left-block-" + "page2"
        return <BlockComponent block = {pages[1].left} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }
      else if (c == RightBlock) {
        id = "right-block-" + "page2"
        return <BlockComponent block = {pages[1].right} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }else{
        id = "block-" + "page2"
        return <BlockComponent block = {pages[1].block} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
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

export default Page2;