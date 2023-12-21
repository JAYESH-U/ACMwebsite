import React from 'react';
import "./home.scss";
import useTheme from '../../context/DarkModeContext';
import Teams from '../teams/Teams';
import About from '../about/About';

function Home() {

    const { darkMode } = useTheme();

    return (
        <div className='home'>
            <About />
            <Teams />
        </div>
    )
}

export default Home