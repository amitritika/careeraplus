//import "../public/stylesheets/main/main.css"
import Head from "next/head"

const Trial = ()=> {
  
  const head = () => (
        <Head>
             <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />

            <link rel="stylesheet" href="../stylesheets/main/icon-font.css" />

            <title>Natours | Exciting tours for adventurous people</title>
        </Head>
    );
  
  const header = () => {
    return (
      <div className = "header">
        <div className = "header__logo-box">
          <img src = "/images/main/logo-white.png" className = "header__logo"></img>
        </div>
        
        <div className = "header__text-box">
          <h1 className = "heading-primary">
            <span className = "heading-primary--main">Outdoors</span>
            <span className = "heading-primary--sub">is where life happens</span>
          </h1>
          
          <a href = "#" className = "btn btn--white btn--animate">Discover Our Tours</a>
        </div>
      </div>
    )
  }
  
  const sectionAbout = ()=>{
    return (
      <div className = "section-about">
        <div className = "u-center-text u-margin-bottom-big">
          <h2 className = "heading-secondary">
            Exciting Tours for adventorous People
          </h2>
        </div>
        <div className = "row">
          <div className = "col-1-of-2">
           <h3 className = "heading-tertiary u-margin-bottom-small">
            You are Going to fall in love with
            </h3>
            <p className = "paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus vestibulum lectus a suscipit. Aliquam suscipit, leo vitae suscipit mattis, est massa sagittis tellus, vitae tempor tellus nulla in sapien.
            </p>
            
            <h3 className = "heading-tertiary u-margin-bottom-small">
            Live Adventures as you never have before
            </h3>
            <p className = "paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus vestibulum lectus a suscipit. Aliquam suscipit, leo vitae suscipit mattis, 
            </p>
            <a href = "#" className = "btn-text">Learn More &rarr;</a>
          </div>
          <div className = "col-1-of-2">
            <div className = "composition">
              <img src = "/images/main/nat-1-large.jpg" className = "composition__photo composition__photo--p1"></img>
              <img src = "/images/main/nat-2-large.jpg" className = "composition__photo composition__photo--p2"></img>
              <img src = "/images/main/nat-3-large.jpg" className = "composition__photo composition__photo--p3"></img>
            </div>
          </div>
          
          
        
        </div>
      </div>
    )
  }
  
  const sectionFeatures = () => {
    return (
      <div className = "section-features">
        <div className = "row">
          <div className = "col-1-of-4">
            <div className = "feature-box">
              <i className="fas fa-globe feature-box__icon"></i>
              <h3 className = "heading-tertiary">Explore the World</h3>
              <p className = "feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus vestibulum lectus a suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return(
    <div id = "trial">
      {head()}
      {header()}
      <div className = "main">
      {sectionAbout()}
      </div>
    </div>
  )
}

export default Trial;