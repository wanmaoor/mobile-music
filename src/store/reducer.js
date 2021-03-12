/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import { combineReducers } from 'redux';
import singerReducer from "../application/Singers/reducer";
import recommendReducer from '../application/Recommend/reducer'
export default combineReducers({
  singerReducer,
  recommendReducer
});
