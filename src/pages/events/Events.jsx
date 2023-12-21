import React from 'react';
import { Link } from 'react-router-dom';
import "./events.scss";
import eventImg from '../../assets/event1.jpg';
import Event from '../../components/event/Event';

function Events() {

	const events = [
		{
			id: 1,
			name: 'Front-end Fiesta',
			desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
			date: new Date('2023-12-26').toDateString(),
			// time: d.getTime(),
			tags: 'Technical Event',
			collabWith: '',
			img: eventImg,
			regLink: 'https://github.com/JAYESH-U',
		},
		{
			id: 2,
			name: 'NLP',
			desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
			date: new Date('2023-10-12').toDateString(),
			// time: d.getTime(),
			tags: 'Technical Event',
			collabWith: '',
			img: eventImg,
			regLink: 'https://github.com/JAYESH-U',
		},
		{
			id: 3,
			name: 'Front-end Fiesta',
			desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
			date: new Date('2023-12-10').toDateString(),
			// time: d.getTime(),
			tags: 'Technical Event',
			collabWith: '',
			img: eventImg,
			regLink: 'https://github.com/JAYESH-U',
		},
	]

	console.log(events);

	return (
		<>
			<div className="events">
				{events.map(event =>(
					<Event value={event} key={event.id}/>
				))}
			</div>
		</>
	)
}

export default Events