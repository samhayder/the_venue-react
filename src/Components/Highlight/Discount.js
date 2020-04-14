import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Uitl/MyButton';

class Discount extends Component {
  
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentWillUpdate(){
    setTimeout(()=>{
      this.percentage()
    }, 100)
  }

  render() {
    return (
      <div className="discount_wrapper center_wrapper">

        <Fade
          onReveal= { () => this.percentage()}
        >
          <div className="discount_porcentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th April.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam itaque pariatur aperiam ab animi dolores delectus qui voluptatem sint. Autem, ad cumque? Eaque corporis fugiat alias perferendis quia deserunt debitis!</p>

            <MyButton
              link= {`http://google.com`}
              bck= '#F44336'
              color= '#ffffff'
              text= 'Purchase ticket'
            />

          </div>
        </Slide>

      </div>
    );
  }
}

export default Discount;