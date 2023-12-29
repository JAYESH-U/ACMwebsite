import React from 'react';
import './team.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import members from '../../appwrite/members';
import Member from '../member/Member';

function Team({ values }) {
    // function Govbod({ values }) {
    // console.log("values : ",values.list);

    const authStatus = useSelector(state => state.auth.status);

    const { category: teamCategory, ...teams } = values;
    // console.log('category : ', teamCategory);
    // console.log('items : ', teams);

    return (
        <div className='teamBody'>
            <h2>{teamCategory}</h2>
            <div className="teamMembers">
                {teams.list.map(member => (
                    <Member member={member} key={member.$id}/>
                ))}
            </div>
        </div>
    );
}

export default Team;
