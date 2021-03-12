import produce from 'immer';
import { SCROLL_RECOMMEND } from './action';

const INITIAL_STATE = {
  scroll: {
    x: 0,
    y: 0,
  },
};

const recommendReducer = produce((draft, action) => {
  switch (action.type) {
    case SCROLL_RECOMMEND:
      draft.scroll = action.payload;
      break;
    default:
      break;
  }
}, INITIAL_STATE);

export default recommendReducer;
