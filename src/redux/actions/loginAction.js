import { actionTypes } from '../constants/actionTypes';

export const loginUser = username => {
	return {
		type: actionTypes.LOGIN,
		payload: username
	};
};

export const usersignup = username => {
	return {
		type: actionTypes.SIGNIN,
		payload: username
	};
};

export const userInfo = shippingInfo => {
	return { type: actionTypes.UPDATEUSERINFO, payload: shippingInfo };
};

export const logoutUser = logOutData => {
	return { type: actionTypes.LOGOUT, payload: logOutData };
};
