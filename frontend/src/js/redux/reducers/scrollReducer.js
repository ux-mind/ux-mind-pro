import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	scrollValues: { y: 0 }
};

export const updateScrollY = createAction('UPDATE_SCROLL_Y');

export default createReducer(initialState, {
	[updateScrollY]: (state, action) => {
		state.scrollValues.y = action.payload;
	}
});
