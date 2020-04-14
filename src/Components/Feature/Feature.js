import React from 'react';
import Carousel from './Carousel'
import Countdown from './Countdown'

const Feature = () => {
  return (
    <div className="" style={{position:'relative'}}>
      
      <Carousel/>
      
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grand
        </div>
      </div> {/* end Artist Name */}

      <Countdown/> 

    </div>
  );
};

export default Feature;