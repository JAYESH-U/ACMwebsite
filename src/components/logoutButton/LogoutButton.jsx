import React from 'react';
import './logoutButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth';

function LogoutButton() {

    const dispatch = useDispatch();
    const navigate = new useNavigate();

    const authStatus = useSelector(state => state.auth.status);
    console.log("AuthStatus : ", authStatus);

    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logout());
            navigate('/');
        }).catch(err => {
            console.log("Error logut from reducers.", err);
        });
    }

    return (
        <div className='logout'>
            <button className='logoutButton' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default LogoutButton;