import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cartActions';
import ShowCart from './ShowCart';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loginData = useSelector(state => state.login);
	const cartData = useSelector(state => state.cart.products);

	const orderNow = async () => {
		if (loginData.status && cartData.length !== 0) {
			navigate('/checkout');
		} else {
			navigate('/login');
		}
	};

	let price = 0;
	return (
		<div>
			<ToastContainer />
			{cartData.length !== 0
				? <section className="product_section layout_padding">
						<div className="container d-flex flex-lg-row justify-around flex-md-row">
							<div class="container flex-grow-1">
								{cartData &&
									cartData.map((item, index) => {
										price += item.price;

										return <ShowCart product={item} key={item.name + index} />;
									})}
							</div>

							<div className="container">
								<div class="row ">
									<div class="col-sm-12 col-md-12 col-lg-12">
										<div class="box">
											<div className=" d-flex flex-column justify-content-start text-left ">
												<h5>
													Price <span> {cartData.length} items</span> :{' '}
													<span> ₹{price}</span>
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
													{price}
												</h6>
											</div>
											<div className="options d-flex flex-row justify-content-around">
												<Link to="/productlist">
													<button
														type="button"
														className="btn btn-outline-danger">
														Shop More
													</button>
												</Link>

												<button
													type="button"
													onClick={orderNow}
													className="btn btn-outline-danger">
													Order Now
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				: <img
						src="images/emptyCart.svg"
						style={{ width: '35vw', marginLeft: '30%' }}
						alt=""
					/>}
		</div>
	);
};

export default Cart;
