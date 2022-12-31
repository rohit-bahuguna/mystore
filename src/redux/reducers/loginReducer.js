import { actionTypes } from '../constants/actionTypes';

export const loginReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.LOGIN:
			console.log(payload.user);
			return {
				...state,
				user: payload.user,
				status: payload.success,
				token: payload.token
			};
		case actionTypes.UPDATEUSERINFO:
			console.log(payload);
			return { ...state, user: payload };
		case actionTypes.LOGOUT:
			return { ...state, user: null, status: !payload.success, token: null };
		default:
			return state;
	}
};

export const signupReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SIGNIN:
			return { ...state, signupUsername: payload, signupStatus: true };
		case actionTypes.LOGOUT:
			return { ...state, signupStatus: false };
		default:
			return state;
	}
};

// export const updateUserInfo = (state = {}, action) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case actionTypes.UPDATEUSERINFO:
// 			return { ...state, user: payload.user };
// 		// case actionTypes.LOGOUT:
// 		// 	return { ...state, signupStatus: false };
// 		default:
// 			return state;
// 	}
// };
