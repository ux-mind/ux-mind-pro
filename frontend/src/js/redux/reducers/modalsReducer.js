import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
	contactModalOpened: false
};

export const toggleContactModal = createAction('TOGGLE_CONTACT_MODAL');

export default createReducer(initialState, {
	[toggleContactModal]: (state) => {
		state.contactModalOpened = !state.contactModalOpened;
	}
});
