import {SET_LOADING_SCREEN, SET_WEATHER_DATA} from './actions';

const initialState = {
  loading: false,
  show: false,
  weather: {
    current: {},
    fiveDay: {},
    sixteenDay: {},
  }
}

const weatherApp = (state = initialState, action) => {
  switch(action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
        weather: {
          ...state.weather,
          [action.key]: action.value,
        }
      };
    case SET_LOADING_SCREEN:
      const {loading = true} = action;
      return {
        ...state,
        loading,
      }
    default:
      return state;
  }
}


export default weatherApp;
