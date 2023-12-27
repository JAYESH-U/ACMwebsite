import React from 'react';
import "./support.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function Support() {
	const authStatus = useSelector(state => state.auth.status);

	return (
		<div className='support'>

			{!authStatus
				? <Link to={'/login'} style={{ textDecoration: "none" }}>
					<span className='loginLink'>Login</span>
				</Link>
				: <Link to={'/admin'} style={{ textDecoration: "none" }}>
					<span className='loginLink'>Admin page</span>
				</Link>
			}

		</div>
	);
}

export default Support;