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
    src: '../../../images/visualresume/expert/layout/layout.jpg',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: '../../../images/visualresume/expert/layout/section-position.jpg',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: '../../../images/visualresume/expert/layout/section-selection.jpg',
    altText: 'Slide 3',
    caption: '',
    header: '',
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