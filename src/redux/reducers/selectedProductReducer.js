import { actionTypes } from '../constants/actionTypes';

export const selectedProductReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_SELECTED_PRODUCT:
			return { ...state, ...payload };
		default:
			return state;
	}
};
