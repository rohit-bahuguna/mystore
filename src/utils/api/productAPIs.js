import axios from 'axios';
let baseUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
	const url = `${baseUrl}/product`;
	const response = axios.get(url, { withCredentials: true });
	return response;
};

export const getOneProducts = async id => {
	const url = `${baseUrl}/product/${id}`;
	const response = axios.get(url, { withCredentials: true });
	return response;
};
