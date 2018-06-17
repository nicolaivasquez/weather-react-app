import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchWeather
} from './actions';

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

  render() {
    return (
      <div>
        <button
          onClick={this.props.handleFetchWeather}
        >Fetch Weather Data</button>
        {
          this.props.loading &&
            <h2>Loading ...</h2>
        }
        {
          this.props.loading ||
            <div>
              <div>
                <h4>Current Weather</h4>
                <div>
                  {JSON.stringify(this.props.current)}
                </div>
              </div>
              <div>
                <h4>5 day forecast</h4>
                <div>
                  {JSON.stringify(this.props.fiveDay)}
                </div>
              </div>
              <div>
                <h4>16 day forecast</h4>
                <div>
                  {JSON.stringify(this.props.sixteenDay)}
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.weather,
    loading: state.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchWeather: () => dispatch(fetchWeather())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
