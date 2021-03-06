import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_title">The Venue</div>
        <div className="footer_copyright">The venue 2020. All right to reserved.</div>
      </Fade>
    </div>
  );
};

export default Footer;