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

function* fetchWeather() {
  console.log('Fetch requested');
  yield put({type: SET_LOADING_SCREEN});
  try {
    yield [
      call(fetchAndSetWeather, 'current', fetchCurrentWeather),
      call(fetchAndSetWeather, 'fiveDay', fetchFiveDayForecast),
      call(fetchAndSetWeather, 'sixteenDay', fetchSixteenDayForecast),
    ];
  } catch(e) {

  }
  yield put({type: SET_LOADING_SCREEN, loading: false})
}

function* fetchAndSetWeather(key, method) {
  try {
    const value = yield call(method);
    yield put({type: SET_WEATHER_DATA, key, value: value.data})
  } catch(e) {}
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER, fetchWeather);
}

export default weatherSaga;
