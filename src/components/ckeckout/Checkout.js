import React, { useState } from 'react';
import OrderSummery from '../order/OrderSummery';
import CheckoutDetails from './CheckoutDetails';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
	const loginData = useSelector(state => state.login);
	const cartData = useSelector(state => state.cart.products);
	const [change, setChange] = useState(false);
	console.log(loginData.user);

	return (
		<div className="d-flex flex-column justify-content-start text-left">
			<div className="col-sm-12 col-md-12 col-lg-8">
				<div className="daily-item">
					<h3>Delivery Address</h3>
					<button onClick={() => setChange(!change)}>
						{change === false ? 'EDIT' : 'CANCEL'}
					</button>
				</div>
				{loginData.user.shippingInfo && change === false
					? <div>
							{loginData.user.shippingInfo.address}{' '}
							{loginData.user.shippingInfo.city}{' '}
							{loginData.user.shippingInfo.state}{' '}
							{loginData.user.shippingInfo.pinCode}
						</div>
					: <CheckoutDetails change={setChange} />}
				<div className="daily-item">
					<h3>Order Summery</h3>
				</div>
				<OrderSummery />
				<div className="daily-item">
					<h3>Payment Options</h3>
				</div>
			</div>
			<div className="container">
				<div class="row ">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<div class="box">
							<div className=" d-flex flex-column justify-content-start text-left ">
								<h5>
									Price <span> {cartData.length} items</span> :{' '}
									{/* <span> ₹{price}</span> */}
								</h5>
								<h5>
									Discount <span> : 0</span>{' '}
								</h5>
								<h5>
									Delivery Charges <span> : 0</span>
								</h5>
								<h5>
									{' '}Secured Packaging Fee <span> : 0</span>
								</h5>
							</div>

							<div className="detail-box">
								<h5>Total Amount</h5>
								<h6>
									{/* {price} */}
								</h6>
							</div>
							<div className="options d-flex flex-row justify-content-around">
								<Link to="/productlist">
									<button type="button" className="btn btn-outline-danger">
										Shop More
									</button>
								</Link>

								<button
									type="button"
									// onClick={orderNow}
									className="btn btn-outline-danger">
									Order Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
