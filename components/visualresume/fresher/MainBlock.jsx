import "../../../public/stylesheets/visualresume/fresher/template1/stylesheet.css"

const MainBlock = ({children}) =>{
  
  return(
   <React.Fragment>
      <div id = "main-block">
        {children}
      </div>
    </React.Fragment>
  )
}

export default MainBlock;