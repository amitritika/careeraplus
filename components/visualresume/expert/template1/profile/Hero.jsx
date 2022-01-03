import { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
const Hero = (props) => {
  
  const profileShow = () => {
    return (
      props.profile.value.map((p,i)=> {
        return (
          <div className = "pro-template1-hero__about" style = {{color: `${props.font}`}} data-aos="fade-up">
            {renderHTML(props.profile.value[i])}
          </div>
        )
      })
    )
  }
  return (
    <Element name = {props.name1} className = "pro-template1-hero" style = {{backgroundImage: 
                                                         `linear-gradient(to right, rgba(255,255,255, 0.95), rgba(255,255,255, 0.95) 70%, transparent), url(https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}}>
      <div className = "pro-template1-hero__image" data-aos="fade-up">
        <img className = "pro-template1-hero__image__i" style = {{border: `0.5rem solid ${props.bg}`}} src = {`${API}/user/photo/${props.username.id}`} />
      </div>
      <div className = "pro-template1-hero__name" style = {{color: `${props.font}`}} data-aos="fade-up">
        {props.name}
      </div>
      <div className = "pro-template1-hero__desg" style = {{color: `${props.bg}`}} data-aos="fade-up">
        {props.desg}
      </div>
      {profileShow()}
    </Element>
  )
}

export default Hero;