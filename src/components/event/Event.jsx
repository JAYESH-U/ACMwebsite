import React from 'react';
import './event.scss';
import { Link } from 'react-router-dom';

function Event({ value: event }) {
    console.log("event: ", event);

    const today = new Date(); // Get today's date

    return (
        <>
            <div className="event">
                <img src={event.img} alt="event1" />
                <div className="details">
                    <div className="description1">
                        <h3>{event.name}</h3>
                        <p>{event.tags}</p>
                    </div>
                    <div className="description2">
                        <span>{event.date}</span>
                        <span>
                            {
                                new Date(event.date) < today ?
                                    '(Event Passed)' :
                                    <Link to={event.regLink} style={{ textDecoration: "none" }}>
                                        <a className='eventLink'>Register</a>
                                    </Link>
                            }
                        </span>
                        <Link style={{ textDecoration: "none" }} to='/events/event1'><span className='eventLink'>Details</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event