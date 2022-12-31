import axios from 'axios';
let baseUrl = `${process.env.REACT_APP_API_URL}/product`;

export const getAllProducts = async () => {
	const url = `${baseUrl}`;
	const response = axios.get(url, { withCredentials: true });
	return response;
};

export const getOneProducts = async id => {
	const url = `${baseUrl}/${id}`;
	const response = axios.get(url, { withCredentials: true });
	return response;
};
