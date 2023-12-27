import React, { useCallback, useState } from "react";
import events from "../../appwrite/events";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './eventForm.scss'


const EventForm = ({ event }) => {
    const userData = useSelector((state) => state.auth.userData);

    const navigate = useNavigate();

    // const [inputs, setInputs] = useState({
    //     name: '',
    //     desc: '',
    //     date: null,
    //     tags: [],
    //     collabwith: [],
    //     img: '',
    //     reglink: '',
    // });

    const [inputs, setInputs] = useState({
        name: event?.name || '',
        desc: event?.desc || '',
        date: event?.date || null,
        tags: event?.tags || [],
        collabwith: event?.collabwith || [],
        img: event?.img || '',
        reglink: event?.reglink || '',
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // Check if the input is a file input
        const inputValue = files ? files[0] : value;

        // For comma-separated values, split the string into an array
        const inputArrayValue = name === 'tags' || name === 'collabwith'
            ? inputValue.split(',').map((item) => item.trim())
            : inputValue;

        // Update state with the selected file or text input value
        setInputs((prev) => ({ ...prev, [name]: inputArrayValue }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        submit(inputs);
    }

    console.log("Event Editing page : ", event);
    console.log("inputs : ", inputs);

    const submit = async (data) => {
        console.log('Data : ', typeof (data.img), data.img);

        if (event) {
            const file = data.img instanceof File? await events.uploadFile(data.img) : null;

            if (file) {
                events.deleteFile(event.img);
            }

            const dbEvent = await events.updateEvent(event.$id, {
                ...data,
                img: file ? file.$id : event.img,
            });

            if (dbEvent) {
                navigate(`/event/${dbEvent.$id}`);
            }
        } else {
            const file = await events.uploadFile(data.img);

            if (file) {
                const fileId = file.$id;
                data.img = fileId;
                const dbEvent = await events.createEvent({ ...data});
                console.log("dbPost : ", dbEvent);

                if (dbEvent) {
                    setTimeout(() => {
                        console.log("File uploaded");
                        navigate(`/event/${dbEvent.$id}`);
                    }, 1000);
                }
            }
        }
    };


    return (
        <div className="eventForm">
            <form>
                {event && <img src={events.getFilePreview(event.img)} alt={event.name} />}
                <div className="formElements">
                    {event
                        ? <label htmlFor="img">Change image?</label>
                        : <label htmlFor="img">Image</label>
                    }<input type="file" name="img" placeholder="Event image / banner" onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="name">Name</label><input type="text" name="name" placeholder="Event name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="desc">Description</label><textarea type="text" name="desc" placeholder="Event description" value={inputs.desc} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="date">Date and Time </label><input type="datetime-local" name="date" placeholder="Date" value={inputs.date || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="date">Registration Link </label><input type="url" name="reglink" placeholder="Link" value={inputs.reglink || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="tags">Tags</label><input type="text" name="tags" placeholder="Tags" value={inputs.tags} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="collabWith">Collaborating clubs</label><input type="text" name="collabwith" placeholder="Collab With" value={inputs.collabwith} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <button onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EventForm;