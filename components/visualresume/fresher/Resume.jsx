import "../../../public/stylesheets/visualresume/fresher/template1/stylesheet.css"

const Resume = ({children}) =>{
  
  return(
   <React.Fragment>
      <div id = "resume">
        {children}
      </div>
    </React.Fragment>
  )
}

export default Resume;