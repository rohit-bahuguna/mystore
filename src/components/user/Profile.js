import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateUser } from '../../utils/api/userAPI';

const Profile = () => {
	const loginData = useSelector(state => state.login);
	const [user, setUser] = useState({
		name: loginData.user.name,
		email: loginData.user.email,

	});

	console.log(user);
	const updateUserData = (e) => {
		console.log(user);
		e.preventDefault()
		updateUser(user).then(response => console.log(response)).catch(error => console.error(error))
	}

	return <section className="why_section layout_padding">
		<div className="container">

			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div className="full">
						<form onSubmit={(e) => updateUserData(e)} >
							<fieldset>

								name: <input type="text" value={loginData.user.name} onChange={e =>
									setUser({ ...user, name: e.target.value })} />

								email: <input type="email" className="text-lowercase" value={loginData.user.email} onChange={e =>
									setUser({ ...user, email: e.target.value })} />
								Images:
								<input
									type="file"
									className="text-lowercase"
									onChange={e =>
										setUser({
											...user,
											photo: e.target.files
										})}

								/>
								<input type="submit" value="update user data" className="rounded-pill" />
							</fieldset>

						</form>
						<img className='user' src={loginData.user.photo.secure_url} alt="" />

					</div>


				</div>
			</div>
		</div>
	</section>;
}

export default Profile
