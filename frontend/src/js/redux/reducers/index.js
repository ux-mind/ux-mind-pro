import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';
import scrollReducer from './scrollReducer';
import pageLoadReducer from './pageLoadReducer';

const rootReducer = combineReducers({
	modals: modalsReducer,
	scroll: scrollReducer,
	pageLoad: pageLoadReducer
});

export default rootReducer;
