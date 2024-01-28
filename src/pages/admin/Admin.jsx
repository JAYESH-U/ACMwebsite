import React from 'react';
import './admin.scss';
import { LogoutButton } from '../../components';

function Admin() {


    return (
        <div className='admin'>
            <LogoutButton />
            {/* <Sidebar /> */}
        </div>
    );
}

export default Admin;