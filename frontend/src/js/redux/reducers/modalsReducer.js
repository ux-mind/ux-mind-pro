import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	menuOpened: false,
	contactModalOpened: false
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
