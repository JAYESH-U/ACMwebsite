import React, { useState } from 'react';
import "./navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import acmLogo from '../../assets/ACMlogo.png';
import useTheme from '../../context/DarkModeContext';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {

    const { darkMode, toggle } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onclick = (e) => {
        console.log('dark ',darkMode);
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
            name: "Archives",
            link: "/archives",
            active: authStatus,
        },
        {
            name: "Support",
            link: "/support",
            active: true,
        },
        // {
        //     name: "Admin",
        //     link: "/admin",
        //     active: authStatus,
        // },
    ];

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    console.log('navbar',isMenuOpen);

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img src={acmLogo} alt="ACM logo" />
                    </Link>
                </div>
                <div className={`center ${isMenuOpen ? 'open' : 'close'}`}>
                    <span className="closeMenu navItems" onClick={toggleNav}><CloseIcon /></span>
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
                <span className="menu navItems" onClick={toggleNav}><MenuIcon /></span>
            </div>
        </>
    );
}

export default Navbar