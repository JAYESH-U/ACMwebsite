import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import acmLogo from '../../assets/ACMlogo.png';
import useTheme from '../../context/DarkModeContext';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


function Navbar() {

    const { darkMode, toggle } = useTheme();

    const onclick = (e) => {
        // console.log(darkMode);
        toggle();
    }

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img src={acmLogo} alt="ACM logo" />
                    </Link>
                </div>
                <div className="center">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className='navItems'>Home</span>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <span className='navItems'>About</span>
                    </Link>
                    <Link to="/events" style={{ textDecoration: "none" }}>
                        <span className='navItems'>Events</span>
                    </Link>
                    <Link to="/team" style={{ textDecoration: "none" }}>
                        <span className='navItems'>Team</span>
                    </Link>
                    <Link to="/support" style={{ textDecoration: "none" }}>
                        <span className='navItems'>Support</span>
                    </Link>
                    <span className='navItems'>
                        {darkMode ? <DarkModeOutlinedIcon onClick={onclick} /> : <WbSunnyOutlinedIcon onClick={onclick} />}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar