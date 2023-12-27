import React from 'react';
import './admin.scss';
import EventForm from '../../components/eventForm/EventForm';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import LogoutButton from '../../components/logoutButton/LogoutButton';

function Admin() {


    return (
        <div className='admin'>
            <LogoutButton />
            <Sidebar />
        </div>
    );
}

export default Admin;