import React, { useState } from 'react';
import './archiveForm.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import archives from '../../appwrite/archives';
import { addArchive, updateArchive } from '../../store/archiveSlice';


function ArchiveForm({ archive = null }) {

    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false); // State variable for loading indicator

    const [inputs, setInputs] = useState({
        name: archive?.name || '',
        desc: archive?.desc || '',
        date: archive?.date || null,
        reportUrl: archive?.reportUrl || '',
    });

    const submit = async (data) => {
        console.log("data : ", data);

        if (archive) {

            const dbArchive = await archives.updateArchive(archive.$id, {
                ...data,
            });

            if (dbArchive) {
                // Dispatch the updateArchive action to update the Redux store
                dispatch(updateArchive(dbArchive));

                navigate(`/archives`);
            }
        } else {
            const dbArchive = await archives.createArchive({ ...data });
            console.log("dbArchive : ", dbArchive);

            if (dbArchive) {
                // Dispatch the addArchive action to add the new archive to the store
                dispatch(addArchive(dbArchive));

                console.log("archive uploaded");
                navigate(`/archives`);
                // window.location.reload();
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await submit(inputs);
        } finally {
            // Stop loading, whether the submission was successful or not
            setLoading(false);
        }
    }

    console.log("inputs : ", inputs);

    return (
        <div className='archiveForm'>
            <h2 className='archiveFormTitle'>Add Archive</h2>
            <form className='archiveFormForm' onSubmit={handleSubmit}>
                <div className="formElements">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Archive name" value={inputs.name} onChange={handleChange} required />
                </div>
                <div className="formElements">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="desc" placeholder="Archive description" value={inputs.desc} onChange={handleChange} required />
                </div>
                <div className="formElements">
                    <label htmlFor="date">Date </label>
                    <input type="date" name="date" placeholder="Date" value={inputs.date || ''} onChange={handleChange} required />
                </div>
                <div className="formElements">
                    <label htmlFor="reportUrl">Report URL </label>
                    <input type="url" name="reportUrl" placeholder="Link" value={inputs.reportUrl || ''} onChange={handleChange} required />
                </div>
                <div className="formElements">
                    <button type='submit'>{loading ? 'Submitting...' : 'Submit'}</button>
                </div>
            </form>
        </div>
    )
}

export default ArchiveForm