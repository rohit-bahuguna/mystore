import { actionTypes } from '../constants/actionTypes';

export const addToCart = product => {
	return {
		type: actionTypes.ADDTOCART,
		payload: product
	};
};
export const addToCartFromAPI = products => {
	return {
		type: actionTypes.ADDTOCART_FROMAPI,
		payload: products
	};
};
export const removeFromCart = id => {
	return {
		type: actionTypes.REMOVEFROMCART,
		payload: id
	};
};

export const clearCart = id => {
	return {
		type: actionTypes.CLEARCART,
		payload: id
	};
};
