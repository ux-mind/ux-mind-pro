import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';

const rootReducer = combineReducers({
	modals: modalsReducer
});

export default rootReducer;
