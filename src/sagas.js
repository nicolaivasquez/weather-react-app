import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import {
  FETCH_WEATHER, SET_LOADING_SCREEN, SET_WEATHER_DATA,
} from './actions';
import {
  fetchCurrentWeather,
  fetchFiveDayForecast,
  fetchSixteenDayForecast,
} from './api';

function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, ({code, message}) =>
        reject(Object.assign(new Error(message), {name: "PositionError", code})),
      options);
  });
};

function* fetchWeather() {
  console.log('Fetch requested');
  yield put({type: SET_LOADING_SCREEN});
  try {
    const location = yield call(getCurrentLocation);
    yield [
      call(fetchAndSetWeather, 'current', fetchCurrentWeather, location),
      call(fetchAndSetWeather, 'fiveDay', fetchFiveDayForecast, location),
      call(fetchAndSetWeather, 'sixteenDay', fetchSixteenDayForecast, location),
    ];
  } catch(e) {

  }
  yield put({type: SET_LOADING_SCREEN, loading: false})
}

function* fetchAndSetWeather(key, method, location) {
  try {
    const {data} = yield call(method, location);
    yield put({type: SET_WEATHER_DATA, key, value: data})
  } catch(e) {}
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER, fetchWeather);
}

export default weatherSaga;
