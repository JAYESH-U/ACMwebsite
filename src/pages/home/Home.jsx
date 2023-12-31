import React from 'react';
import "./home.scss";
import useTheme from '../../context/DarkModeContext';
import Teams from '../teams/Teams.jsx';
import About from '../about/About';
import Gallery from '../../components/Gallery/Gallery';

function Home() {

    const { darkMode } = useTheme();

    return (
        <div className='home'>
            <About />
            <Teams />
            {/* <Gallery /> */}
        </div>
    )
}

export default Home