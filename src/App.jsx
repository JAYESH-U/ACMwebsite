import { useState, useEffect } from 'react';
import './App.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store.js'
import { login, logout } from './store/authSlice';
import { DarkModeContextProvider } from './context/DarkModeContext';
import authService from './appwrite/auth';
import events from './appwrite/events';
import { storeEvents } from './store/eventSlice';
import members from './appwrite/members';
import { storeMembers } from './store/teamSlice';

import Home from './pages/home/home';
import About from './pages/about/About';
import Teams from './pages/teams/Teams';
import Events from './pages/events/Events';
import Support from './pages/support/Support';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import EditEvent from './pages/editEvent/EditEvent';
import AddEvent from './pages/addEvent/AddEvent';
import AddMember from './pages/addMember/AddMember';
import EditMember from './pages/editMember/EditMember';
import MemberDetails from './pages/memberDetails/MemberDetails';

import Navbar from './components/navbar/Navbar';
import AuthLayout from './components/AuthLayout';
import EventDetails from './pages/eventDetails/EventDetails';
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
			.catch((err) => console.log('errors finding events : ', err))
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
