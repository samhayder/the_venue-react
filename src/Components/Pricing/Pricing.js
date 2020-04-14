import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../Uitl/MyButton';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    category: ['Balcony', 'Medium', 'Star'],
    delay: [500, 0, 500],
    linkTo: ['http://the-venue.com/balcony', 'http://the-venue.com/medium', 'http://the-venue.com/star'],
    decs: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit'
    ]
  }

  showBox = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.category[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.decs[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                link = {this.state.linkTo[i]}
                bck='#F44336'
                color='#ffffff'
                text='Purchase tickets'
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className=" bck_black">
        <div className="pricing_section center_wrapper">
          <h2>Pricing</h2>
        </div>

        <div className="pricing_wrapper">
          {this.showBox()}
        </div>
      </div>
    );
  }
}

export default Pricing;