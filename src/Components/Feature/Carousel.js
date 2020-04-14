import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

const Carousel = () => {
 
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true
  };

  return (
    <div 
      className="carrousel_wrapper"
      style={{
        overflow:'hidden',
        height: `100vh`
      }}
    >
      <Slider {...settings}>
          <div>
            <div 
              className="carrousel_image"
              style={{
                background: `url(${slide_one})`,
                height: `${window.innerHeight}px`
              }}
            ></div>
          </div> {/* end slide one */}
          
          <div>
            <div 
              className="carrousel_image"
              style={{
                background: `url(${slide_two})`,
                height: `${window.innerHeight}px`
              }}
            ></div>
          </div> {/* end slide Two */}
         
          <div>
            <div 
              className="carrousel_image"
              style={{
                background: `url(${slide_three})`,
                height: `${window.innerHeight}px`
              }}
            ></div>
          </div> {/* end slide Three */}

      </Slider>
    </div> /* end carousel  */
  );
};

export default Carousel;