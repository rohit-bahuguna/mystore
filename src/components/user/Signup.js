import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersignup } from '../../redux/actions/loginAction';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../utils/api/userAPI';

const Signup = () => {
	const [user, setUser] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signUpData = useSelector(state => state.signup);

	if (signUpData.signupStatus) {
		setTimeout(() => {
			navigate('/login');
		}, 5000);
	}
	console.log(user);
	const signUpFn = e => {
		// take two input values
		e.preventDefault();

		// call api with name and password
		signIn(user)
			.then(response => {
				dispatch(usersignup(response.data));
				toast.success('Account Created Successfully');
			})
			.catch(error => {
				// console.log(error);
				toast.error(error.response.data.message);
			});
		// navigate('/login');
	};
	return (
		<div>
			<ToastContainer />

			<section className="why_section layout_padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<div className="full">
								<form>
									<fieldset>
										Name:
										<input
											type="text"
											onChange={e => setUser({ ...user, name: e.target.value })}
											name="name"
											required
										/>
										email:
										<input
											type="email"
											className="text-lowercase"
											onChange={e =>
												setUser({ ...user, email: e.target.value })}
											name="password"
											required
										/>
										Password:
										<input
											type="password"
											onChange={e =>
												setUser({ ...user, password: e.target.value })}
											name="password"
											required
										/>
										<input
											className="rounded-pill"
											type="submit"
											value="Sign in"
											onClick={signUpFn}
										/>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
