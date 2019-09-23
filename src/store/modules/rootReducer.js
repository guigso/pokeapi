import { combineReducers } from 'redux';

import pokemon from 'store/modules/pokemon/reducer';

const reducers = combineReducers({ pokemon });

export default reducers;
