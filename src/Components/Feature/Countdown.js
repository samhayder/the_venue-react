import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
  constructor(){
    super()
    this.state ={
      deadLine: 'Jun, 30, 2020',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  getTimeUnit = (deadLine) => {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    if(time < 0){
      console.log('Time is over.');
    }else{
      const seconds = Math.floor( (time/1000) %60 );
      const minutes = Math.floor( (time/1000/60) %60 );
      const hours = Math.floor( (time/(1000*60*60)) % 24 );
      const days = Math.floor( (time/(1000*60*60*24)) );

      this.setState({
        days,
        hours,
        minutes,
        seconds
      })
    }
  }

  componentDidMount(){
    setInterval(() => this.getTimeUnit(this.state.deadLine), 1000)
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event Start in
          </div> {/* end Countdown top */}

          <div className="countdown_bottom">

            <div className="countdown_time">
              <div className="countdown_item">
                {this.state.days}
              </div>
              <div className="countdown_tag">
                Days
              </div>
            </div> {/* end Countdown Days */}

            <div className="countdown_time">
              <div className="countdown_item">
                {this.state.hours}
              </div>
              <div className="countdown_tag">
                Hs
              </div>
            </div> {/* end Countdown Hours */}

            <div className="countdown_time">
              <div className="countdown_item">
                {this.state.minutes}
              </div>
              <div className="countdown_tag">
                Min
              </div>
            </div> {/* end Countdown Minute */}

            <div className="countdown_time">
              <div className="countdown_item">
                {this.state.seconds}
              </div>
              <div className="countdown_tag">
                Sec
              </div>
            </div> {/* end Countdown Second */}

          </div> {/* end Countdown bottom */}
        </div>
      </Slide>
    );
  }
}

export default Countdown;