import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	isPageLoaded: false
};

export const setPageLoaded = createAction('SET_PAGE_LOADED');

export default createReducer(initialState, {
	[setPageLoaded]: (state) => {
		state.isPageLoaded = true;
	}
});
