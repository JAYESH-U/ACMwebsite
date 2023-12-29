import React from 'react';
import './eventCard.scss';
import { Link } from 'react-router-dom';
import events from '../../appwrite/events';
import Button from '../button/Button';

function EventCard({ value: event }) {
    const today = new Date();
    const eventDate = new Date(event.date);

    // Format date and time using toLocaleDateString and toLocaleTimeString
    const formattedDate = eventDate.toLocaleDateString('en-GB');
    const formattedTime = eventDate.toLocaleTimeString('en-GB');

    return (
        <div className="event">
            <img src={events.getFilePreview(event.img)} alt="event1" />
            <div className="details">
                <div className="description1">
                    <h3>{event.name}</h3>
                    <p>{event.tags}</p>
                </div>
                <div className="description2">
                    <span><strong>Date: </strong>{formattedDate}</span>
                    <span><strong>Time: </strong>{formattedTime}</span>
                </div>
                <div className="description3">
                    <span>
                        {eventDate < today ?
                            '(Event Passed)' :
                            <Button link={event.reglink} target={'_blank'} name={'Register'} />
                        }
                    </span>
                    <Button link={`/event/${event.$id}`} name={'Details'} />
                </div>
            </div>
        </div>
    );
}

export default EventCard;
