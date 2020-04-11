import LeftBlock from "./LeftBlock"
import RightBlock from "./RightBlock"
import Block from "./Block"

const Page3 = (props) => {
  let pages = props.pages
  const showBlocks = () => {
    return(
    
    pages[2].blocks.map((c, i)=>{
      let BlockComponent = c;
      let id = ""
      if (c== LeftBlock) {
        id = "left-block-" + "page3"
        return <BlockComponent block = {pages[2].left} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }
      else if (c == RightBlock) {
        id = "right-block-" + "page3"
        return <BlockComponent block = {pages[2].right} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
      }else{
        id = "block-" + "page3"
        return <BlockComponent block = {pages[2].block} fac = {props.fac} bg = {props.bg} font = {props.font} id = {id}/>;
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

export default Page3;