import { actionTypes } from '../constants/actionTypes';

const tempState = {
	products: [],
	user: ''
};
export const cartReducer = (state = tempState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.ADDTOCART:
			return { products: [...state.products, payload], user: payload.user };
		case actionTypes.ADDTOCART_FROMAPI:
			return { ...state, products: [...payload] };
		case actionTypes.REMOVEFROMCART:
			let item = state.products;
			const newItems = item.filter((value, index) => {
				return value._id !== payload;
			});

			let tempitem = [...newItems];
			return { products: tempitem };

		case actionTypes.CLEARCART:
			return { products: [] };

		default:
			return state;
	}
};
