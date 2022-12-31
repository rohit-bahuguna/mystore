import axios from 'axios';
let baseUrl = `${process.env.REACT_APP_API_URL}/admin`;

export const adminAddProducts = async product => {
	const url = `${baseUrl}/product/add`;
	const response = axios.post(url, product, {
		headers: {
			'content-Type': 'multipart/form-data'
		},

		withCredentials: true
	});
	return response;
};

export const adminGetProducts = async product => {
	const url = `${baseUrl}/product`;
	const response = axios.get(url, {
		withCredentials: true
	});
	return response;
};

export const adminUpdateProducts = (product, id) => {
	const url = `${baseUrl}/product/${id}`;
	const response = axios.put(url, product, {
		headers: {
			'content-Type': 'multipart/form-data'
		},

		withCredentials: true
	});
	return response;
};

export const adminDeleteProduct = id => {
	const url = `${baseUrl}/product/${id}`;
	const response = axios.delete(url, {
		withCredentials: true
	});
	return response;
};
