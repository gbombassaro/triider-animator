import {combineReducers} from 'redux';

import user from './user';
import configs from './configs';

export default combineReducers({
  user,
  configs
});