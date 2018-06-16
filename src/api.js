import axios from 'axios';
import config from './config';

const openWeatherBaseUrl = 'http://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = () => {
  console.log('Retrieving current weather');
  return axios.get(`${openWeatherBaseUrl}/weather?q=London&APPID=${config.OPEN_WEATHER_API_KEY}`);
};

export const fetchFiveDayForecast = () => {
  console.log('Retrieving 5 day forecast');
  return axios.get(`${openWeatherBaseUrl}/forecast?q=London&APPID=${config.OPEN_WEATHER_API_KEY}`);
};

export const fetchSixteenDayForecast = () => {
  console.log('Retrieving 16 day forecast');
  return axios.get(`${openWeatherBaseUrl}/forecast/daily?q=London&APPID=${config.OPEN_WEATHER_API_KEY}`);
};
