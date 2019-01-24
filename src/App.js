import React, { Component } from 'react';
import './App.css';
import Time from './Time/Time'

class App extends Component {

  state = {
    time: this.getTime()
  }

  getTime() {
    const time = new Date();

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    return {
      seconds,
      minutes,
      hours,
    }
  }

  componentDidMount() {

    const setTime = () => {
      this.setState({
        time: this.getTime()
      })
    }
    setInterval(setTime, 1000)
  }

  render() {
    return (
      <div className="clock">
        <Time
          seconds={this.state.time.seconds}
          minutes={this.state.time.minutes}
          hours={this.state.time.hours}
        />
      </div>
    );
  }
}

export default App;
