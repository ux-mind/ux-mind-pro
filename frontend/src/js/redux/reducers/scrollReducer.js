import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	scrollValues: { offset: { x: 0, y: 0 }, limit: { x: 0, y: 0 } }
};

export const updateScrollValues = createAction('UPDATE_SCROLL_VALUES');

export default createReducer(initialState, {
	[updateScrollValues]: (state, action) => {
		state.scrollValues = action.payload;
	}
});
