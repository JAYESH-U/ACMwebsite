import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../../store/authSlice';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    // console.log(inputs);

    const login = async (inputs) => {
        setErr('');
        try {
            const session = await authService.login(inputs);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/admin");
            }
        } catch (error) {
            setErr(error.message)
        }
    }

    const handleClick = async (e) =>{
        e.preventDefault();
        login(inputs);
    }

    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello admin.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio voluptatibus rem, recusandae adipisci aspernatur asperiores vel perferendis voluptas ullam fugiat, voluptate ab harum sunt odio porro iste eveniet magnam.
                    </p>
                    <span>Are you not an admin?</span>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="email" name='email' placeholder='email' onChange={handleChange} />
                        <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                        {err && err}
                        <button type='submit' onClick={handleClick}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login