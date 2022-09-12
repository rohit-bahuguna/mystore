import React, { useRef, useState } from 'react';

import { adminAddProducts } from '../utils/api/adminAPIs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin_Add_Product = () => {
	const errorRef = useRef();
	const [product, setProduct] = useState({
		name: '',
		price: 0,
		description: '',
		category: '',
		brand: '',
		photos: []
	});

	const addProductHandler = e => {
		e.preventDefault();

		if (
			product.name !== '' &&
			product.price !== '' &&
			product.category !== '' &&
			product.product_type !== ''
		) {
			adminAddProducts(product)
				.then(response => {
					console.log(response);
					toast.success('product added successfully');
				})
				.catch(error => console.log(error));

			setProduct({
				name: '',
				price: '',
				description: '',
				category: '',
				brand: '',
				photos: []
			});
			errorRef.current.textContent = '';
		} else {
			errorRef.current.textContent = 'Plz fill all the values.';
		}
	};

	return (
		<section className="why_section layout_padding">
			<ToastContainer />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="full">
							<form onSubmit={e => addProductHandler(e)}>
								<fieldset>
									name:
									<input
										type="text"
										value={product.name}
										onChange={e =>
											setProduct({ ...product, name: e.target.value })}
									/>
									Price:
									<input
										type="text"
										value={product.price}
										onChange={e =>
											setProduct({ ...product, price: e.target.value })}
									/>
									Description:
									<input
										type="text"
										value={product.description}
										onChange={e =>
											setProduct({ ...product, description: e.target.value })}
									/>
									Category:
									<input
										type="text"
										value={product.category}
										onChange={e =>
											setProduct({ ...product, category: e.target.value })}
									/>
									Brand :
									<input
										type="text"
										value={product.brand}
										onChange={e =>
											setProduct({ ...product, brand: e.target.value })}
									/>
									Images:
									<input
										type="file"
										className="text-lowercase"
										onChange={e =>
											setProduct({
												...product,
												photos: [...e.target.files]
											})}
										multiple
									/>
									<input
										className="rounded-pill"
										type="submit"
										value="Add Product"
									/>
								</fieldset>
							</form>
						</div>
						<div className="text-danger" ref={errorRef} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin_Add_Product;
