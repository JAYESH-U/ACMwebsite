import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './eventDetails.scss';
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import events from '../../appwrite/events';
import { Loading, Button } from "../../components";
import { deleteEvent as deleteEventFromStore } from "../../store/eventSlice";

function EventDetails() {
    const [event, setEvent] = useState(null);

    const dispatch = useDispatch();

    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate directly

    const authStatus = useSelector(state => state.auth.status);
    const eventList = useSelector(state => state.events.eventList)

    useEffect(() => {
        const foundEvent = eventList.find(event => event.$id === id);
        if (foundEvent) {
            console.log(foundEvent.collabwith.length);
            console.log(foundEvent.collabwith);
            setEvent(foundEvent);
        } else {
            navigate("/events");
        }
    }, [id, eventList, navigate]);

    //fetch event...
    // useEffect(() => {
    //     if (id) {
    //         events.getEvent(id)
    //             .then((event) => {
    //                 console.log("event: ", event);
    //                 if (event) setEvent(event);
    //                 else navigate("/");
    //             })
    //             .catch((err) => console.log(err));
    //     } else navigate("/");
    // }, [id, navigate]);


    //delete event...
    const deleteEvent = () => {
        events.deleteEvent(event.$id).then((status) => {
            if (status) {
                events.deleteFile(event.img);

                // Dispatch the deleteEvent action to update the Redux store
                dispatch(deleteEventFromStore(event.$id));

                navigate("/events");
                // window.location.reload();
            }
        });
    };


    const today = new Date();
    const eventDate = new Date(event?.date || ''); // Make sure event.date is defined

    // Format date and time using toLocaleDateString and toLocaleTimeString
    const formattedDate = eventDate.toLocaleDateString('en-GB');
    const formattedTime = eventDate.toLocaleTimeString('en-GB');

    const isEventPassed = eventDate < today;

    return event ? (
        <div>
            <div className="eventDetails">
                <img src={events.getFilePreview(event.img)} alt={event.name} />

                <div className="details">
                    <div className="description1">
                        <h3>{event.name}</h3>
                        {event.tags.map(tag =>
                            <span key={tag}>
                                #{tag}
                            </span>
                        )}
                        {event.collabwith.length > 0
                            && <span>
                                <strong>In Collaboration: </strong>
                                {event.collabwith}
                            </span>
                        }

                    </div>

                    <div className="description2">
                        <span><strong>Date: </strong>{formattedDate}</span>
                        <span><strong>Time: </strong>{formattedTime}</span>
                    </div>

                    <div className="eventDescription">
                        {parse(event.desc)}
                    </div>

                    <div className="description3">
                        {isEventPassed ?
                            <span> '(Event Passed)' </span>
                            : <Button link={event.reglink} target={'_blank'} name={'Register'} />
                        }

                        <Button link={`/events`} name={'back'} />
                    </div>

                    {authStatus && (
                        <div className="editables">
                            <span className='eventLink' onClick={deleteEvent} >
                                Delete
                            </span>
                            <Button link={`/edit-event/${event.$id}`} name={'Edit'} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}

export default EventDetails;
