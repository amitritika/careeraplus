import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = () => {
  return (
    <div className = "fresher-template1-nav">
      <ul>
        <Link activeClass = "active" to = "hero" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item">
              <i className="fas fa-home fresher-template1-nav-item__icon"></i>
              <span className = "fresher-template1-nav-item__text">Home</span>
            </a>
          </li>
        </Link>
        
        <Link activeClass = "active" to = "skills" spy = {true} smooth= {true}>
          <li className = "u-margin-bottom-small">
            <a className = "fresher-template1-nav-item">
              <i className="fas fa-tools fresher-template1-nav-item__icon"></i>
              <span className = "fresher-template1-nav-item__text">Skills</span>
            </a>
          </li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Nav;