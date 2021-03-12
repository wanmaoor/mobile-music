import produce from 'immer';
import { CHANGE_SINGER_PIVOT, GET_HOT_SINGER_LIST, GET_SINGER_LIST } from './action';
const INITIAL_STATE = {
  singerList: [],
  pivot: {
    category: '',
    alpha: '',
    area: ''
  }
};
const singerReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_SINGER_LIST:
      draft.singerList = action.payload
      break;
    case GET_HOT_SINGER_LIST:
      draft.singerList = action.payload
      break;
      case CHANGE_SINGER_PIVOT:
        draft.pivot[action.payload.key] = action.payload.val
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default singerReducer