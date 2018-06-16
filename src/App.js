import React, { Component } from 'react';
import {
  fetchCurrentWeather,
  fetchFiveDayForecast,
  fetchSixteenDayForecast
} from './api';

function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, ({code, message}) =>
        reject(Object.assign(new Error(message), {name: "PositionError", code})),
      options);
  });
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
        current: {},
        fiveDay: {},
        sixteenDay: {},
      }
    }
  }

  async fetchWeather() {
    let location = false;
    if ('geolocation' in navigator) {
      try {
        location = await getCurrentLocation();
      } catch(e) {
        location = false;
      }
    }

    const [
      current,
      fiveDay,
      sixteenDay
    ] = await Promise.all([
      fetchCurrentWeather(location).then(res => res.data),
      fetchFiveDayForecast(location).then(res => res.data),
      fetchSixteenDayForecast(location).then(res => res.data),
    ]);

    this.setState({
      weather: {
        ...this.state.weather,
        current,
        fiveDay,
        sixteenDay,
      }
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.fetchWeather.bind(this)}
        >Fetch Weather Data</button>
        <div>
          <h4>Current Weather</h4>
          <div>
            {JSON.stringify(this.state.weather.current)}
          </div>
        </div>
        <div>
          <h4>5 day forecast</h4>
          <div>
            {JSON.stringify(this.state.weather.fiveDay)}
          </div>
        </div>
        <div>
          <h4>16 day forecast</h4>
          <div>
            {JSON.stringify(this.state.weather.sixteenDay)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
