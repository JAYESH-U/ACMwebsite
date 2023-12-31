import React, { useEffect, useState } from 'react';
import './memberDetails.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import members from '../../appwrite/members';
import Loading from '../../components/loading/Loading';
import Button from '../../components/button/Button';
import { deleteMember as deleteMemberFromStore } from '../../store/teamSlice';


// import pic from '../../assets/dummyImage.png';
// import sirpic from '../../assets/perurSir.jpg';

function MemberDetails() {
    const authStatus = useSelector(state => state.auth.status);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [member, setMember] = useState(null);
    const [err, setErr] = useState(null);

    const { id } = useParams();
    // console.log(id);

    //fetch member...
    // useEffect(() => {
    //     if (id) {
    //         members.getMember(id)
    //             .then((member) => {
    //                 // console.log("member: ", member);
    //                 if (member) setMember(member);
    //                 else navigate("/");
    //             })
    //             .catch((err) => console.log(err));
    //     } else navigate("/");
    // }, [id, navigate]);

    const memberList = useSelector(state => state.team.memberList)

    useEffect(() => {
        const foundMember = memberList.find(member => member.$id === id);
        if (foundMember) {
            setMember(foundMember);
        } else {
            // navigate("/team");
            console.log('NotFound');
        }
    }, [id, memberList, navigate]);

    //delete event...
    const deleteMember = () => {
        members.deleteMember(member.$id).then((status) => {
            if (status) {
                members.deleteFile(member.img);

                dispatch(deleteMemberFromStore(member.$id));

                navigate("/team");
                // window.location.reload();
            }
        })
            .catch(err => setErr(err));
    };

    // console.log(member);

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


                <Button link={`/team`} name={'back'} />
            </div>

            {authStatus &&
                <div className='editMembers'>
                    <Button link={`/edit-member/${member.$id}`} name={'Edit'} />
                    <button className='eventLink' onClick={deleteMember} >
                        Delete
                    </button>
                </div>
            }

        </div>
    ) : (
        <Loading />
    );
}

export default MemberDetails