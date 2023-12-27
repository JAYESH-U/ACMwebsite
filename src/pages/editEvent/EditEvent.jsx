import React, { useEffect, useState } from 'react';
import './editEvent.scss';
import EventForm from '../../components/eventForm/EventForm';
import { useNavigate, useParams } from 'react-router-dom';
import events from '../../appwrite/events';


function EditEvent() {

    const [event, setEvent] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            console.log("Getting Event");
            events.getEvent(id)
                .then((event) => {
                    if (event) {
                        setEvent(event);
                    }
                })
        } else {
            navigate('/');
        }
    }, [id, navigate])

    console.log("event id: ", id);
    console.log("event editing: ", event);

    return event ? (
        <div className='editEventPage'>
            <EventForm event={event} />
        </div>
    ) : null;
}

export default EditEvent;