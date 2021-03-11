import { takeEvery, put } from 'redux-saga/effects';
import { axiosInstance } from '../../api/config';
import { GET_HOT_SINGER_LIST, GET_SINGER_LIST, REQUEST_SINGER_LIST, REQUEST_HOT_SINGER_LIST } from './action';
function* getSingerList(action) {
  const { category, alpha, count } = action.payload;
  const data = yield axiosInstance({
    method: 'GET',
    url: '/artist/list',
    params: {
      cat: category,
      initial: alpha.toLowerCase(),
      offset: count,
    },
  });
  yield put({ type: GET_SINGER_LIST, payload: data.artists });
}

function* getHotSingerList(action){
  const {count} = action.payload
  const data = yield axiosInstance({
    method:'GET',
    url: '/top/artists',
    params: {
      offset: count
    }
  })
  yield put({type: GET_HOT_SINGER_LIST, payload: data.artists})
}

const singerSagas = [takeEvery(REQUEST_SINGER_LIST, getSingerList), takeEvery(REQUEST_HOT_SINGER_LIST, getHotSingerList)];

export default singerSagas;
