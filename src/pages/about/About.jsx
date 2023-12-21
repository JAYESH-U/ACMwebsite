import React from 'react';
import "./about.scss";
import useTheme  from '../../context/DarkModeContext';
import Banner from '../../assets/banner.png';
import BannerDark from '../../assets/bannerDark.png';
import Logo from '../../assets/ACMlogo.png';

function About() {
    const { darkMode } = useTheme();
	console.log(darkMode);

	return (
		<div className='info'>
			<div className="banner">
				{darkMode ? <img src={Banner} alt='bannerDark' /> : <img src={BannerDark} alt='banner' />}
			</div>
			<div className="logo">
				<img src={Logo} alt="" />
			</div>
			<div className="about">
				<h2>About ACM</h2>
				{/* <p>
                    Department of Information Science & Engineering, GIT-Belagavi is associated with the ACM Student Chapter by an active participation conducting most of the student academic development activities.
                    The ACM Student Chapter is organized and is operated exclusively for educational and scientific purposes to promote an increased knowledge of and greater interest in the science, design, development, construction, languages, management and applications of modern computing.
                    To imbibe in community a greater interest in computing and its applications. ACM Student chapter acts as a means of communication between persons having an interest in computing.
                    The Chapter will serve students at K.L.S's Gogte Institute of Technology, Belagavi and other interested persons in the community and is chartered by ACM .
                    The student chapter of ACM has officers with positions of the Chair, Vice Chair, and Treasurer. In addition, a Faculty Sponsor with an ACM Professional Membership is Present to look out for the overall activity of the chapter.
                </p> */}
				<ul>
					<li>Department of Information Science & Engineering, GIT-Belagavi is associated with the ACM Student Chapter by an active participation conducting most of the student academic development activities.</li>
					<li>The ACM Student Chapter is organized and is operated exclusively for educational and scientific purposes to promote an increased knowledge of and greater interest in the science, design, development, construction, languages, management and applications of modern computing.</li>
					<li>To imbibe in community a greater interest in computing and its applications. ACM Student chapter acts as a means of communication between persons having an interest in computing.</li>
					<li>The Chapter will serve students at K.L.S's Gogte Institute of Technology, Belagavi and other interested persons in the community and is chartered by ACM .</li>
					<li>The student chapter of ACM has officers with positions of the Chair, Vice Chair, and Treasurer. In addition, a Faculty Sponsor with an ACM Professional Membership is Present to look out for the overall activity of the chapter.</li>
				</ul>
			</div>
		</div>
	)
}

export default About