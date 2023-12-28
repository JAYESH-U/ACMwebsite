import React from 'react';
import './team.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import members from '../../../appwrite/members';

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
                    <div className='teamDetails' key={member.$id}>
                        <Link to={`/member/${member.$id}`}>
                            <div className="teamMember">
                                <img className='memberImg' src={members.getFilePreview(member.img)} alt="" />
                                <div className="memberInfo">
                                    <h2 className='memberName'>{member.name}</h2>
                                    <p className="memberPost">{member.post}</p>
                                    <p className="memberDesc">{member.desc}</p>
                                </div>
                            </div>
                        </Link>
                        <h3>{member.post && <span>{member.post} : </span>}{member.name}</h3>
                        {authStatus &&
                            <div className='editMembers'>
                                <Link to={`/edit-member/${member.$id}`} style={{ textDecoration: 'none' }}>
                                    <span>Edit</span>
                                </Link>
                                <Link to={`/delete-member/${member.$id}`} style={{ textDecoration: 'none' }}>
                                    <span>Delete</span>
                                </Link>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
