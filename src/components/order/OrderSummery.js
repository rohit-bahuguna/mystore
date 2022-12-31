import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const OrderSummery = () => {
	const cartData = useSelector(state => state.cart.products);
	return (
		<section className="product_section layout_padding">
			<div className="container">
				<div className="row">
					{cartData &&
						cartData.map((value, index) =>
							<div
								className="col-sm-12 col-md-12 col-lg-12"
								key={value.name + index}>
								<Link to={`/productdetail/${value._id}`}>
									<div className="box">
										<div className="img-box">
											<img src={value.photos[0]} className="img-fluid " />
										</div>
									</div>
									<div className="detail-box text-center text-danger text-opacity-75">
										<h5>
											{value.name}
										</h5>
										<h6 className="text-dark fs-5">
											Price : {value.price}
										</h6>
									</div>
								</Link>
							</div>
						)}
				</div>
			</div>
		</section>
	);
};

export default OrderSummery;
