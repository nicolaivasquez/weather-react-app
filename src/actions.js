export const FETCH_WEATHER = 'FETCH_CURRENT_WEATHER';
export const fetchWeather = () => ({
  type: FETCH_WEATHER,
});

export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const setWeatherData = (key, value) => ({
  type: SET_WEATHER_DATA,
  key,
  value,
});

export const SET_LOADING_SCREEN = 'SET_LOADING_SCREEN';
export const setLoadingScreen = (loading = true) => ({
  type: SET_LOADING_SCREEN,
  loading,
})
