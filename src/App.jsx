import { useState, useEffect } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { DarkModeContextProvider } from './context/DarkModeContext';
import authService from './appwrite/auth';
import events from './appwrite/events';
import members from './appwrite/members';
import archives from './appwrite/archives';
import { storeEvents } from './store/eventSlice';
import { storeMembers } from './store/teamSlice';
import { storeArchives } from './store/archiveSlice';

import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';

function App() {

	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login({ userData }));
				} else {
					dispatch(logout());
				}
			})
			.catch((err) => console.log('No user found: ', err));
		// .finally(() => setLoading(false));

		members.getMembers()
			.then((memberList) => {
				if (memberList) {
					dispatch(storeMembers(memberList.documents));
				} else {
					console.log("Members found is zero");
				}
			})
			.catch((err) => console.log('Error finding members : ', err));

		events.getEvents()
			.then((eventList) => {
				if (eventList) {
					dispatch(storeEvents(eventList.documents));
				}
			})
			.catch((err) => console.log('errors finding events : ', err));

		archives.getArchives()
			.then((archiveList) => {
				if (archiveList) {
					dispatch(storeArchives(archiveList.documents));
				} else {
					console.log("Archives found is zero");
				}
			})
			.catch((err) => console.log('errors finding archives : ', err))
			.finally(() => setLoading(false));
	}, [dispatch]);


	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode")) || false
	);

	const toggle = () => {
		setDarkMode(!darkMode);
	}

	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	const Layout = () => {
		console.log(darkMode);
		return !loading ? (
			<div className={`theme-${darkMode ? "light" : "dark"} apps`}>
				<Navbar />
				<Outlet />
			</div>
		) : <Loading />;
	};


	return (
		<>
			<DarkModeContextProvider value={{ darkMode, toggle }}>
				<Layout />
			</DarkModeContextProvider>
		</>
	);
}

export default App;
