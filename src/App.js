import React, { Component } from 'react';
import './App.css';
import Time from './Time/Time'
import CurrentDate from './CurrentDate/CurrentDate';
import Description from './Description/Description';

const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class App extends Component {

  state = {
    time: this.getTime(),
    date: this.getDate()
  }

  getDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayName = daysName[date.getDay()];

    return {
      dayName,
      day,
      year,
      month
    }
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
    const setTimeAndDate = () => {
      this.setState({
        time: this.getTime(),
        date: this.getDate()
      })
    }
    setInterval(setTimeAndDate, 1000)
  }

  render() {
    return (
      <div className="clock">

        <CurrentDate
          dayName={this.state.date.dayName}
          day={this.state.date.day}
          year={this.state.date.year}
          month={this.state.date.month}
        />

        <Time
          seconds={this.state.time.seconds}
          minutes={this.state.time.minutes}
          hours={this.state.time.hours}
        />

        <Description />
      </div>
    );
  }
}

export default App;
