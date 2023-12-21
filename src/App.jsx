import { useState, useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { DarkModeContextProvider } from './context/DarkModeContext';

import Home from './pages/home/home';
import About from './pages/about/About';
import Teams from './pages/teams/Teams';
import Events from './pages/events/Events';
import Support from './pages/support/Support';

import Navbar from './components/navbar/Navbar';

function App() {

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
		return (
			<div className={`theme-${darkMode ? "light" : "dark"}`}>
				<Navbar />
				<Outlet />
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
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
			],
		},

	]);

	return (
		<>
			<DarkModeContextProvider value={{ darkMode, toggle }}>
				<RouterProvider router={router} />
			</DarkModeContextProvider>
		</>
	)
}

export default App
