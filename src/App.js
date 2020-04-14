import React, {Component} from 'react';
import './resources/styles.css'
import {Element} from 'react-scroll'

import Header from './Components/Header_Footer/Header';
import Feature from './Components/Feature/Feature';
import VenueNFO from './Components/VenueNFO/VenueNFO';
import Highlight from './Components/Highlight/Highlight'
import Pricing from './Components/Pricing/Pricing';
import Location from './Components/Location/Location';
import Footer from './Components/Header_Footer/Footer'

class App extends Component {
 
  render() {
    return(
        <div className="App">
          <Header />

          <Element name="feature">
            <Feature />
          </Element>

          <Element name="eventnfo">
            <VenueNFO />
          </Element>

          <Element name="highlights">
            <Highlight />
          </Element>

          <Element name="pricing">
            <Pricing />
          </Element>

          <Element name="location">
            <Location />
          </Element>

          <Footer />
        </div>
    )
  }
}

export default App;
