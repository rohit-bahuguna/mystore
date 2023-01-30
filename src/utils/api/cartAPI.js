import axios from 'axios';
let baseUrl = `${process.env.REACT_APP_API_URL}/cart`;

export const addToCartApi = async product => {
	const url = `${baseUrl}/addtocart`;
	const response = axios.post(
		url,
		{ product },
		{
			withCredentials: true
		}
	);
	return response;
};

export const getAllCartApi = async () => {
	const url = `${baseUrl}/getallcart`;
	const response = axios.get(url, {
		withCredentials: true
	});
	return response;
};

export const removeItemsFromCart = async id => {
	const url = `${baseUrl}/deletefromcart/${id}`;
	return await axios.delete(url, {
		withCredentials: true
	});
};
