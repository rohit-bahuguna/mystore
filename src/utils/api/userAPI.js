import axios from 'axios';
let baseUrl = process.env.REACT_APP_API_URL;

// name email , password
export const signIn = async user => {
	const url = `${baseUrl}/signup`;
	const response = await axios.post(url, user, {
		withCredentials: true
	});
	return response;
};

//email , password
export const logIn = async user => {
	const url = `${baseUrl}/login`;
	const response = await axios.post(url, user, { withCredentials: true });
	return response;
};

export const logOut = async () => {
	const url = `${baseUrl}/logout`;
	const response = await axios.get(url, { withCredentials: true });
	return response;
};

// // email
// export const forgetPassword = async email => {
// 	const url = `${baseUrl}/signin`;
// 	const response = await axios.post(url, email);
// 	return response;
// };
// // password , confirmPassword
// export const resetPassword = async user => {
// 	const url = `${baseUrl}/signin`;
// 	const response = await axios.post(url, user);
// 	return response;
// };

// // oldPassword newPassword

// export const updatePassword = async user => {
// 	const url = `${baseUrl}/signin`;
// 	const response = await axios.put(url, user);
// 	return response;
// };

// name photo any another details
export const updateUser = async user => {
	const url = `${baseUrl}/userdashboard/update`;
	const response = await axios.put(url, user, {
		headers: {
			'content-Type': 'multipart/form-data'
		},

		withCredentials: true
	});
	return response;
};

// get all products
