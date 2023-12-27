import React from 'react';
import "./navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import acmLogo from '../../assets/ACMlogo.png';
import useTheme from '../../context/DarkModeContext';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useSelector } from 'react-redux';


function Navbar() {

    const { darkMode, toggle } = useTheme();

    const onclick = (e) => {
        // console.log(darkMode);
        toggle();
    }

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            link: "/",
            active: true
        },
        {
            name: "About",
            link: "/about",
            active: true,
        },
        {
            name: "Events",
            link: "/events",
            active: true,
        },
        {
            name: "Team",
            link: "/team",
            active: true,
        },
        {
            name: "Support",
            link: "/support",
            active: true,
        },
        {
            name: "Admin",
            link: "/admin",
            active: authStatus,
        },
    ];

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img src={acmLogo} alt="ACM logo" />
                    </Link>
                </div>
                <div className="center">
                    {navItems.map((item) =>
                        item.active
                        && <span key={item.link} className='navItems' onClick={() => navigate(item.link)}>
                            {item.name}
                        </span>
                    )}
                    <span className='navItems'>
                        {darkMode ? <DarkModeOutlinedIcon onClick={onclick} /> : <WbSunnyOutlinedIcon onClick={onclick} />}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar