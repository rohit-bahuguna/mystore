import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateUserShippingInfo } from '../../utils/api/userAPI';
import { userInfo } from '../../redux/actions/loginAction';
import { useDispatch } from 'react-redux';

const CheckoutDetails = ({ change }) => {
	const [userShippingInfo, setUserShippingInfo] = useState({});
	const dispatch = useDispatch();

	console.log(userShippingInfo);
	const updateShippingInfo = async e => {
		e.preventDefault();
		const address = await updateUserShippingInfo(userShippingInfo);

		dispatch(userInfo(address.data.updatedUserDetails));
		change(false);
	};

	return (
		<section className="why_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="full">
							<form>
								<fieldset>
									Address:{' '}
									<input
										className="text-lowercase"
										type="text"
										onChange={e =>
											setUserShippingInfo({
												...userShippingInfo,
												address: e.target.value
											})}
										name="password"
										required
									/>{' '}
									Contact Number:{' '}
									<input
										type="number"
										onChange={e =>
											setUserShippingInfo({
												...userShippingInfo,
												contactNumber: e.target.value
											})}
										name="password"
										required
									/>
									City:{' '}
									<input
										className="text-lowercase"
										type="text"
										onChange={e =>
											setUserShippingInfo({
												...userShippingInfo,
												city: e.target.value
											})}
										name="password"
										required
									/>{' '}
									State:{' '}
									<input
										className="text-lowercase"
										type="text"
										onChange={e =>
											setUserShippingInfo({
												...userShippingInfo,
												state: e.target.value
											})}
										name="password"
										required
									/>{' '}
									Pin Code :
									<input
										className="text-lowercase"
										type="number"
										name="password"
										maxLength={6}
										onChange={e =>
											setUserShippingInfo({
												...userShippingInfo,
												pinCode: e.target.value
											})}
										required
									/>
									<input
										className="rounded-pill"
										type="submit"
										value="Save"
										onClick={e => {
											updateShippingInfo(e);
										}}
									/>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckoutDetails;
