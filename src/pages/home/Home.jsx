import React from 'react';
import "./home.scss";
import useTheme from '../../context/DarkModeContext';
import { Teams } from '../index';
import { AboutC, Gallery } from '../../components';

function Home() {

    const { darkMode } = useTheme();

    return (
        <div className='home'>
            <AboutC />
            <Teams />
            {/* <Gallery /> */}
        </div>
    )
}

export default Home