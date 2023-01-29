import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../utils/api/userAPI';
import { loginUser } from '../../redux/actions/loginAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const loginData = useSelector(state => state.login);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		name: loginData.user.name,
		email: loginData.user.email,
		photo: []
	});

	const dispatch = useDispatch();
	const updateUserData = e => {
		e.preventDefault();
		updateUser(user)
			.then(response => {
				dispatch(loginUser(response.data));
				setLoading(false);
				toast.success('your data updated successfully');
			})
			.catch(error => console.error(error));
	};

	return (
		<section className="why_section layout_padding">
			<ToastContainer />
			{loginData.status &&
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<div className="full">
								<form onSubmit={e => updateUserData(e)}>
									<fieldset>
										name:{' '}
										<input
											type="text"
											value={user.name}
											onChange={e => setUser({ ...user, name: e.target.value })}
										/>
										email:{' '}
										<input
											type="email"
											className="text-lowercase"
											value={user.email}
											onChange={e =>
												setUser({ ...user, email: e.target.value })}
										/>
										Images:
										<input
											type="file"
											className="text-lowercase"
											onChange={e =>
												setUser({
													...user,
													photo: [...e.target.files]
												})}
										/>
										<input
											type="submit"
											value={loading ? 'updating...' : 'update your details'}
											className="rounded-pill"
											onClick={() => setLoading(true)}
										/>
									</fieldset>
								</form>
								<img
									className="user"
									src={loginData.user.photo.secure_url}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>}
		</section>
	);
};

export default Profile;
