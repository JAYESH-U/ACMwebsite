import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx'
import Events from './pages/events/Events.jsx'
import Admin from './pages/admin/Admin.jsx'
import EditEvent from './pages/editEvent/EditEvent.jsx'
import AddEvent from './pages/addEvent/AddEvent.jsx'
import EventDetails from './pages/eventDetails/EventDetails.jsx'
import EditMember from './pages/editMember/EditMember.jsx'
import AddMember from './pages/addMember/AddMember.jsx'
import MemberDetails from './pages/memberDetails/MemberDetails.jsx'
import Teams from './pages/teams/Teams.jsx'
import Support from './pages/support/Support.jsx'

import AuthLayout from './components/AuthLayout.jsx';


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
			<App />
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
			{
				path: '/edit-member/:id',
				element: (
					<AuthLayout authentication>
						{" "}
						<EditMember />
					</AuthLayout>
				)
			},
			{
				path: '/add-member',
				element: (
					<AuthLayout authentication>
						{" "}
						<AddMember />
					</AuthLayout>
				)
			},
			{
				path: '/member/:id',
				element: <MemberDetails />
			},
		],
	},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
)
