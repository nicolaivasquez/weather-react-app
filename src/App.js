import React, { Component } from 'react';
import {
  fetchCurrentWeather,
  fetchFiveDayForecast,
  fetchSixteenDayForecast
} from './api';

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

  fetchWeather() {
    fetchCurrentWeather().then((response) => {
      this.setState({
        weather: {
          ...this.state.weather,
          current: response.data,
        }
      })
    });
    fetchFiveDayForecast().then((response) => {
      this.setState({
        weather: {
          ...this.state.weather,
          fiveDay: response.data,
        }
      })
    });;
    fetchSixteenDayForecast().then((response) => {
      this.setState({
        weather: {
          ...this.state.weather,
          sixteenDay: response.data,
        }
      })
    });;
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
