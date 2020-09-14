import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Hero = (props) => {
  
  
  return (
    <Element name = "hero" className = "fresher-template1-hero" style = {{backgroundImage: 
                                                         `linear-gradient(to right, rgba(255,255,255, 0.95), rgba(255,255,255, 0.95) 70%, transparent), url(https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}}>
      Hi
    </Element>
  )
}

export default Hero;