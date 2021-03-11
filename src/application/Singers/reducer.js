import produce from 'immer';
import { GET_HOT_SINGER_LIST, GET_SINGER_LIST } from './action';
const INITIAL_STATE = {
  singerList: []
};
const singerReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_SINGER_LIST:
      draft.singerList = action.payload
      break;
    case GET_HOT_SINGER_LIST:
      draft.singerList = action.payload
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default singerReducer