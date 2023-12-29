import React from 'react';
import "./support.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import EmailForm from '../../components/emailForm/EmailForm';
import Button from '../../components/button/Button';

function Support() {
	const authStatus = useSelector(state => state.auth.status);

	return (
		<div className='support'>

			<div className="buttons">
				{!authStatus
					? <Button link={`/login`} name={'Login'} />
					: <Button link={`/admin`} name={'Admin page'} />
				}
			</div>

			<EmailForm />

		</div>
	);
}

export default Support;