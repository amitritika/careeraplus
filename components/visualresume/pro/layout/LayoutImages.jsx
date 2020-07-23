import React from 'react';
import { UncontrolledCarousel } from 'reactstrap'; 

import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';

const LayoutImages = (props) => {
  const [img, setImg] = useState(true)
//   let OwlCarousel = null

// useEffect(()=>{
    
//  OwlCarousel =  require('react-owl-carousel');
//     setImg(true)
//   }, [])
  const items = [
  {
    src: '../../../images/visualresume/pro/layout/layout.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '../../../images/visualresume/pro/layout/section-position.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: '../../../images/visualresume/pro/layout/section-selection.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

  
  return (
    <React.Fragment>
      <section id="testimonials">
        <div class="container">

          <div class="section-title">
            <h2>Layout Description</h2>
            </div>
          <UncontrolledCarousel items={items} />
          

        </div>
      </section>
    </React.Fragment>
    
  )
}

export default LayoutImages;