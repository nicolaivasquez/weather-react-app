import axios from 'axios';
import config from './config';

const openWeatherBaseUrl = 'http://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = (location = false) => {
  console.log('Retrieving current weather');
  const params = {
    APPID: config.OPEN_WEATHER_API_KEY,
  };
  const locationParams = location ? {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  } : {
    q: 'London'
  };

  return axios.get(`${openWeatherBaseUrl}/weather`, {
    params: {
      ...params,
      ...locationParams,
    }
  });
};

export const fetchFiveDayForecast = (location = false) => {
  console.log('Retrieving 5 day forecast');
  const params = {
    APPID: config.OPEN_WEATHER_API_KEY,
  };
  const locationParams = location ? {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  } : {
    q: 'London'
  };

  return axios.get(`${openWeatherBaseUrl}/forecast`, {
    params: {
      ...params,
      ...locationParams,
    }
  });
};

export const fetchSixteenDayForecast = (location = false) => {
  console.log('Retrieving 16 day forecast');
  const params = {
    APPID: config.OPEN_WEATHER_API_KEY,
  };
  const locationParams = location ? {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  } : {
    q: 'London'
  };

  return axios.get(`${openWeatherBaseUrl}/forecast/daily`, {
    params: {
      ...params,
      ...locationParams,
    }
  });
};
