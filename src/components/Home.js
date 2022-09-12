import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../utils/api/productAPIs';
import { setProducts } from '../redux/actions/productActions';

const Home = () => {
	const tempData = useSelector(state => state.allProducts.products);

	const dispatch = useDispatch();
	if (tempData.length !== 0) {
		tempData.length -= tempData.length - 4;
	}

	useEffect(() => {
		getAllProducts()
			.then(response => {
				console.log(response.data.products);
				dispatch(setProducts(response.data.products));
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className="hero_area">
			<section class="slider_section ">
				<div className="slider_bg_box">
					<img src="images/slider-bg.jpg" alt="" />
				</div>
				<div
					id="customCarousel1"
					className="carousel slide"
					data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="container ">
								<div className="row">
									<div className="col-md-7 col-lg-6 ">
										<div className="detail-box">
											<h1>
												<span>Sale 20% Off</span>
												<br />
												On Everything
											</h1>
											<p>
												If you would like to experience the best of online
												shopping for men, women and kids in India, you are at
												the right place. My Store is the ultimate destination
												for fashion and lifestyle.
											</p>
											<div className="btn-box">
												<Link to="productlist" className="btn1">
													Shop Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item ">
							<div className="container ">
								<div className="row">
									<div className="col-md-7 col-lg-6 ">
										<div className="detail-box">
											<h1>
												<span>Sale 20% Off</span>
												<br />
												On Everything
											</h1>
											<p>
												Explicabo esse amet tempora quibusdam laudantium,
												laborum eaque magnam fugiat hic? Esse dicta aliquid
												error repudiandae earum suscipit fugiat molestias,
												veniam, vel architecto veritatis delectus repellat modi
												impedit sequi.
											</p>
											<div className="btn-box">
												<Link to="" className="btn1">
													Shop Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="container ">
								<div className="row">
									<div className="col-md-7 col-lg-6 ">
										<div className="detail-box">
											<h1>
												<span>Sale 20% Off</span>
												<br />
												On Everything
											</h1>
											<p>
												Explicabo esse amet tempora quibusdam laudantium,
												laborum eaque magnam fugiat hic? Esse dicta aliquid
												error repudiandae earum suscipit fugiat molestias,
												veniam, vel architecto veritatis delectus repellat modi
												impedit sequi.
											</p>
											<div className="btn-box">
												<Link to="" className="btn1">
													Shop Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* why_section  */}

			<section className="why_section layout_padding">
				<div className="container">
					<div className="heading_container heading_center">
						<h2>Why Shop With Us</h2>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="box ">
								<div className="img-box">
									<img
										src="./images/fast-delivery-truck-svgrepo-com.svg"
										alt=""
									/>
								</div>
								<div className="detail-box">
									<h5>Fast Delivery</h5>
									<p>variations of passages of Lorem Ipsum available</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="box ">
								<div className="img-box">
									<img src="./images/quality-svgrepo-com.svg" alt="" />
								</div>
								<div className="detail-box">
									<h5>Best Quality</h5>
									<p>variations of passages of Lorem Ipsum available</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="box ">
								<div className="img-box">
									<img
										src="./images/free-delivery-free-svgrepo-com.svg"
										alt=""
									/>
								</div>
								<div className="detail-box">
									<h5>Free Shiping</h5>
									<p>variations of passages of Lorem Ipsum available</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="product_section layout_padding ">
				<div className="container">
					<div className="heading_container heading_center">
						<h2>
							Our <span>Products</span>
						</h2>
					</div>
					<div className="row ">
						{tempData &&
							tempData.map((temp, index) =>
								<div className="col-sm-4 col-md-4 col-lg-3">
									<Link to={`/productdetail/${temp._id}`}>
										<div className="box">
											<div className="img-box">
												<img
													src={temp.photos[0].secure_url}
													className="img-fluid "
												/>
											</div>
										</div>
										<div className="detail-box text-center text-danger text-opacity-75">
											<h5>
												{temp.name}
											</h5>
											<h6 className="text-dark fs-5">
												Price : {temp.price}
											</h6>
										</div>
									</Link>
								</div>
							)}
					</div>
					<div className="btn-box">
						<Link to="/productlist"> View All products</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
