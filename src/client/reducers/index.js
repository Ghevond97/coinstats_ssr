import { combineReducers } from 'redux';

import { requestStatus, stats } from './fetchStats';

export default combineReducers({ stats, requestStatus });
