import { REQUEST_STATS, RECEIVE_STATS, ERROR_STATS } from '../constants';

const requestStats = () => {
  return {
    type: REQUEST_STATS
  };
};

const receivedStats = json => {
  return {
    type: RECEIVE_STATS,
    payload: json
  };
};

const errorMessage = error => {
  return {
    type: ERROR_STATS,
    payload: error
  };
};

export const getStats = () => {
  return dispatch => {
    dispatch(requestStats());
    return fetch(`https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array`)
      .then(response => response.json())
      .then(json => dispatch(receivedStats(json.data)))
      .catch(error => dispatch(errorMessage()));
  };
};
