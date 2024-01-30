import React from 'react';
import './archive.scss';
import { Button } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArchive } from '../../store/archiveSlice';
import archives from '../../appwrite/archives';

function Archive({ archive }) {

    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);

    console.log(archive);

    const date = new Date(archive.date);
    const formattedDate = date.toLocaleDateString('en-IN');


    const handleDelete = async () => {
        // Show confirmation dialog before deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this archive?');

        // If user confirms deletion, proceed with deletion logic
        if (confirmDelete) {
            archives.deleteArchive(archive.$id).then((status) => {
                if (status) {
                    // Dispatch the deleteEvent action to update the Redux store
                    dispatch(deleteArchive(archive.$id));
                }
            });
        }
    };

    return (
        <div className='archive'>
            <h3 className='archiveTitle'>{archive.name}</h3>
            <p className='date'><strong>Date : </strong>{formattedDate}</p>
            {/* <p className='description'><strong>Description : </strong>{archive.desc}</p> */}
            <div className="editables">
                <Button link={archive.reportUrl} name={'View Report'} target={true} />
                {authStatus && (
                    <span className='delete' onClick={handleDelete} >
                        Delete
                    </span>
                )}
            </div>
        </div>
    )
}

export default Archive