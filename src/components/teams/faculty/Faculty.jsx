import React from 'react';
import './faculty.scss';
// import FacultyPic from '../../../assets/perurSir.jpg';

function Faculty({ values }) {

    console.log(values);
    const { category: teamCategory, ...teams } = values;
    console.log('category : ', teamCategory);
    console.log('items : ', teams);

    return (
        <>
            <div className="faculty">
                <h2>{teamCategory}</h2>
                {teams.list.map(member => (
                    <div className="details" key={member.id}>
                        <img src={member.img} alt="" />
                        <span className='name'>{member.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Faculty