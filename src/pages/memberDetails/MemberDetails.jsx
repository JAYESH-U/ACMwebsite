import React, { useEffect, useState } from 'react';
import './memberDetails.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import members from '../../appwrite/members';


// import pic from '../../assets/dummyImage.png';
// import sirpic from '../../assets/perurSir.jpg';

function MemberDetails() {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();

    const [member, setMember] = useState(null);

    const { id } = useParams();
    console.log(id);

    //fetch event...
    useEffect(() => {
        if (id) {
            members.getMember(id)
                .then((member) => {
                    console.log("member: ", member);
                    if (member) setMember(member);
                    else navigate("/");
                })
                .catch((err) => console.log(err));
        } else navigate("/");
    }, [id, navigate]);


    //delete event...
    const deleteEvent = () => {
        members.deleteMember(member.$id).then((status) => {
            if (status) {
                members.deleteFile(member.img);
                navigate("/events");
            }
        });
    };

    console.log(member);

    return member ? (
        <div className='memberDetails'>
            <div className="simpleDetails">
                <img src={members.getFilePreview(member.img)} alt={member.name} />

                <div className="details1">
                    <h3>{member.post && <span>{member.post}.</span>}</h3>
                    <h1>{member.name}</h1>
                    <span>{member.category}</span>
                </div>
            </div>

            <div className="moreDetails">
                <p className='memberDescription'>{member.desc}</p>


                <Link style={{ textDecoration: "none" }} onClick={() => navigate(`/team`)}>
                    <span className='eventLink'>Back</span>
                </Link>
            </div>

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
    ) : (
        <div className="events">
            <h1>Loading</h1>
        </div>
    );
}

export default MemberDetails