import React from 'react';
import './team.scss';

function Team({ category, values }) {
    // function Govbod({ values }) {
    // console.log("values : ",values.list);

    const { category: teamCategory, ...teams } = values;
    console.log('category : ', teamCategory);
    console.log('items : ', teams);

    return (
        <div className='teamBody'>
            <h2>{teamCategory}</h2>
            <div className="teamMembers">
                {teams.list.map(member => (
                    <div className='teamDetails'>
                        <div className="teamMember" key={member.id}>
                            <img className='memberImg' src={member.img} alt="" />
                            <div className="memberInfo">
                                <h2 className='memberName'>{member.name}</h2>
                                <p className="memberPost">{member.post}</p>
                                <p className="memberDesc">{member.desc}</p>
                            </div>
                        </div>
                        <h3>{member.post && <span>{member.post} : </span>}{member.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
