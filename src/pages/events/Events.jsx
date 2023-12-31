import React, { useState, useEffect } from 'react';
import "./events.scss";
import eventImg from '../../assets/event1.jpg';
import dummyImage from '../../assets/dummyImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { storeEvents } from '../../store/eventSlice';
import EventCard from '../../components/eventCard/EventCard';
import events from '../../appwrite/events';
import Loading from '../../components/loading/Loading';
import Button from '../../components/button/Button';

function Events() {

	const authStatus = useSelector(state => state.auth.status);
	const eventList = useSelector(state => state.events.eventList);

	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	// const events = [
	// 	{
	// 		id: 1,
	// 		name: 'Front-end Fiesta',
	// 		desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
	// 		date: new Date('2023-12-26').toDateString(),
	// 		// time: d.getTime(),
	// 		tags: 'Technical Event',
	// 		collabWith: '',
	// 		img: eventImg,
	// 		regLink: 'https://github.com/JAYESH-U',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'NLP',
	// 		desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
	// 		date: new Date('2023-10-12').toDateString(),
	// 		// time: d.getTime(),
	// 		tags: 'Technical Event',
	// 		collabWith: '',
	// 		img: eventImg,
	// 		regLink: 'https://github.com/JAYESH-U',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Front-end Fiesta',
	// 		desc: 'We the ACM club of KLS GIT, are excited to propose Front-End Fiesta: Design Showdown from 26th December 2023 to 2th January 2024. This event aims to engage teams of 3 students each to develop basic websites for selected government schools. The event will culminate in a final evaluation competition on the last day, where teams will showcase their websites, and winners will be selected through judging rounds. Further donating the site to the government schools. We also plan to reward the participants and volunteers with 15 and 20 activity points respectively for their contribution in Digital India.',
	// 		date: new Date('2023-12-10').toDateString(),
	// 		// time: d.getTime(),
	// 		tags: 'Technical Event',
	// 		collabWith: '',
	// 		img: eventImg,
	// 		regLink: 'https://github.com/JAYESH-U',
	// 	},
	// ]

	// const dummyEvent = {
	// 	id: 0,
	// 	name: 'Add an event',
	// 	desc: '',
	// 	date: null,
	// 	// time: d.getTime(),
	// 	tags: '',
	// 	collabWith: '',
	// 	img: dummyImage,
	// 	regLink: '',
	// }

	// console.log(events);

	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	events.getEvents()
	// 		.then((posts) => {
	// 			if (posts) {
	// 				setPosts(posts.documents);
	// 			}
	// 		});
	// }, []);

	console.log("posts: ",);

	// useEffect(() => {
	// 	events.getEvents()
	// 		.then((eventList) => {
	// 			if (eventList) {
	// 				dispatch(storeEvents(eventList.documents));
	// 			}
	// 		})
	// 		.catch((err) => console.log('errors finding events : ', err))
	// 		.finally(() => setLoading(false));
	// }, [dispatch])


	console.log("eventsList: ", eventList);
	// return eventList.length > 0 ? (
	// 	<>
	// 		<div className="events">
	// 			{eventList.map(event => (
	// 					<EventCard value={event} key={event.$id}/>
	// 			))}
	// 			{/* {authStatus && <EventCard value={dummyEvent} />} */}
	// 			<div className='fullWidth'></div>
	// 			{authStatus
	// 				&& <Button link={'/add-event'} name={'Add event'} />
	// 			}
	// 		</div>
	// 	</>
	// ) : (
	// 	<Loading />
	// );
	return  (
		<>
			<div className="events">
				{eventList.length > 0 ? eventList.map(event => (
						<EventCard value={event} key={event.$id}/>
				)) : <Loading />}
				{/* {authStatus && <EventCard value={dummyEvent} />} */}
				<div className='fullWidth'></div>
				{authStatus
					&& <Button link={'/add-event'} name={'Add event'} />
				}
			</div>
		</>
	);
}

export default Events