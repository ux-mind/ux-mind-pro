import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';
import scrollReducer from './scrollReducer';

const rootReducer = combineReducers({
	modals: modalsReducer,
	scroll: scrollReducer
});

export default rootReducer;
