import React from 'react';
import './addEvent.scss';
import EventForm from '../../components/eventForm/EventForm';

function AddEvent() {
    return (
        <div className='AddEventPage'>
            <EventForm />
        </div>
    );
}

export default AddEvent;