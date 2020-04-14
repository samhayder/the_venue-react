import React from 'react';
import Zoom from 'react-reveal/Zoom';

import iconCalendar from '../../resources/icons/calendar.png';
import iconLocation from '../../resources/icons/location.png';

const VenueNFO = () => {
  return (
    <div className="bck_black">
      <div className="vn_wrapper">

        <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                  <div 
                    className="vn_icon"
                      style={{ 
                        background: `url(${iconCalendar})`
                       }}
                  ></div>
                  <div className="vn_title">
                    Event Date &amp; Time
                  </div>
                  <div className="vn_desc">
                    7th May 2020
                    @10.00pm
                  </div>
              </div>
            </div>
          </div>
        </Zoom> {/* end calender NFO */}

        <Zoom duration={500} delay={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                  <div 
                    className="vn_icon"
                      style={{ 
                        background: `url(${iconLocation})`
                       }}
                  ></div>
                  <div className="vn_title">
                    Event Date &amp; Time
                  </div>
                  <div className="vn_desc">
                    7th May 2020
                    @10.00pm
                  </div>
              </div>
            </div>
          </div>
        </Zoom> {/* end Location NFO */}

      </div>
    </div>
  );
};

export default VenueNFO;