import React from 'react';
import './member.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import members from '../../appwrite/members';
import Button from '../button/Button';

function Member({ member }) {

    const authStatus = useSelector(state => state.auth.status);
    // console.log('member : ', member);

    return (
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
                    <Button link={`/edit-member/${member.$id}`} name={'Edit'}/>
                    <Button link={`/member/${member.$id}`} name={'Details'}/>
                </div>
            }
        </div>
    );
}

export default Member