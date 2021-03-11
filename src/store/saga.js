import { all } from "redux-saga/effects";
import singerSagas from '../application/Singers/saga'

export default function* rootSaga(){
  yield all([
    ...singerSagas
  ])
}