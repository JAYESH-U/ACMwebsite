import React, { useEffect, useState } from 'react';
import './editMember.scss';
import MemberForm from '../../components/memberForm/MemberForm';
import { useNavigate, useParams } from 'react-router-dom';
import members from '../../appwrite/members';

function EditMember() {

	const [member, setMember] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			console.log("Getting member");
			members.getMember(id)
				.then((member) => {
					if (member) {
						setMember(member);
					}
				})
		} else {
			navigate('/');
		}
	}, [id, navigate])

	console.log("member id: ", id);
	console.log("member editing: ", member);

	return (
		<div className='editMemberPage'>
			<MemberForm member={member} />
		</div>
	)
}

export default EditMember