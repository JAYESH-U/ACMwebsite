import React from 'react';
import './faculty.scss';
import FacultyPic from '../../../assets/perurSir.jpg';

function Faculty() {

    return (
        <>
            <div className="faculty">
                <h2>Faculty coordinator</h2>
                <div className="details">
                    <img src={FacultyPic} alt="" />
                    <span className='name'>Prof. Shrivatsa Perur</span>
                </div>
            </div>
        </>
    )
}

export default Faculty