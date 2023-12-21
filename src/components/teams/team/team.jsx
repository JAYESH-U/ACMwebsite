import React from 'react';
import './team.scss';

function Team({ category , values }) {
// function Govbod({ values }) {
    // console.log("values : ",values.list);
    
    const { category: teamCategory, ...teams } = values;
    console.log('category : ', teamCategory);
    console.log('items : ', teams);

    return (
        <div className='govbod'>
            <h2>{teamCategory}</h2>
            <div className="govs">
            {teams.list.map(member =>(
                <div className="gov" key={member.id}>
                    <img src={member.img} alt="" />
                    <h3>{member.post && <span>{member.post} : </span>}{member.name}</h3>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Team;
