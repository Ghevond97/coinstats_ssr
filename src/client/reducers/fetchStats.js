import { RECEIVE_STATS, REQUEST_STATS, ERROR_STATS } from '../constants';

export const requestStatus = (state = true, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return true;
    case ERROR_STATS:
      return false;
    default:
      return state;
  }
};
export const stats = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STATS:
      return action.payload;
    
    default:
      return state;
  }
};
