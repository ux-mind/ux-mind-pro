import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	offset: { x: 0, y: 0 },
	limit: { x: 0, y: 0 }
};

export const toggleContactModal = createAction('TOGGLE_CONTACT_MODAL');
export const toggleMenu = createAction('TOGGLE_MENU');

export default createReducer(initialState, {
	[toggleMenu]: (state) => {
		state.menuOpened = !state.menuOpened;
	},
	[toggleContactModal]: (state) => {
		state.contactModalOpened = !state.contactModalOpened;
	}
});
