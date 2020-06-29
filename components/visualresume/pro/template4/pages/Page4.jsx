import LeftBlock from "./LeftBlock"
import RightBlock from "./RightBlock"
import Block from "./Block"

const Page4 = (props) => {
  let pages = props.pages
 const showBlocks = () => {
    return(
    
    pages[3].blocks.map((c, i)=>{
      let BlockComponent = c;
      let id = ""
      if (c== LeftBlock) {
        id = "left-block-" + "page4"
        return <BlockComponent block = {pages[3].left} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }
      else if (c == RightBlock) {
        id = "right-block-" + "page4"
        return <BlockComponent block = {pages[3].right} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }else{
        id = "block-" + "page4"
        return <BlockComponent block = {pages[3].block} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
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

export default Page4;