import { useState, useEffect } from 'react';
import './App.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store.js'
import { login, logout } from './store/authSlice';
import { DarkModeContextProvider } from './context/DarkModeContext';
import authService from './appwrite/auth';

import Home from './pages/home/home';
import About from './pages/about/About';
import Teams from './pages/teams/Teams';
import Events from './pages/events/Events';
import Support from './pages/support/Support';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import EditEvent from './pages/editEvent/EditEvent';

import Navbar from './components/navbar/Navbar';
import AuthLayout from './components/AuthLayout';
import EventDetails from './components/eventDetails/EventDetails';
import AddEvent from './pages/addEvent/AddEvent';

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
			.finally(() => setLoading(false))
	}, [dispatch])

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
		) : null;
	};

	const router = createBrowserRouter([
		{
			path: '/login',
			element: (
				<AuthLayout authentication={false}>
					<Login />
				</AuthLayout>
			)
		},
		{
			path: '/',
			element: (
				<Layout />
			),
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/about',
					element: <About />
				},
				{
					path: '/events',
					element: <Events />
				},
				{
					path: '/team',
					element: <Teams />
				},
				{
					path: '/support',
					element: <Support />
				},
				{
					path: '/admin',
					element: (
						<AuthLayout authentication>
							{" "}
							<Admin />
						</AuthLayout>
					)
				},
				{
					path: '/edit-event/:id',
					element: (
						<AuthLayout authentication>
							{" "}
							<EditEvent />
						</AuthLayout>
					)
				},
				{
					path: '/add-event',
					element: (
						<AuthLayout authentication>
							{" "}
							<AddEvent />
						</AuthLayout>
					)
				},
				{
					path: '/event/:id',
					element: <EventDetails />
				},
			],
		},

	]);

	return (
		<>
			<DarkModeContextProvider value={{ darkMode, toggle }}>
				<RouterProvider router={router} />
			</DarkModeContextProvider>
		</>
	);
}

export default App;
