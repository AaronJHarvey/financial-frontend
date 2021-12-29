import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      isRunning: false
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }


  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isRunning: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1000);
  }


  stopTimer() {
    this.setState({isRunning: false})
    clearInterval(this.timer)
  }

  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isRunning) ?
      <button onClick={this.stopTimer}>stop</button> :
      null
    let resume = (this.state.time != 0 && !this.state.isRunning) ?
      <button onClick={this.startTimer}>resume</button> :
      null


    return(
      <div>
        <h3>timer: {this.state.time}</h3>
        {start}
        {resume}
        {stop}
      </div>
    )
  }
}


export default Timer
