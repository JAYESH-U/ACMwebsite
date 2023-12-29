import React, { useEffect, useState } from 'react';
import './memberForm.scss';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import members from "../../appwrite/members";
import Loading from '../loading/Loading';
import { Button } from '@mui/material';


function MemberForm({ member }) {

    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        desc: '',
        post: '',
        category: '',
        sem: null,
        img: '',
        term: null,
        dept: '',
    });

    useEffect(() => {
        // Update the inputs state when the member prop changes
        if (member) {
            setInputs({
                name: member.name || '',
                desc: member.desc || '',
                post: member.post || '',
                category: member.category || '',
                sem: member.sem || null,
                img: member.img || '',
                term: member.term || null,
                dept: member.dept || '',
            });
        }
    }, [member]); // Dependency array ensures the effect runs when member changes


    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // Check if the input is a file input
        const inputValue = files ? files[0] : value;

        // For numeric fields, parse the input value as a number
        const inputNumberValue = name === 'sem' || name === 'term'
            ? parseInt(inputValue, 10)
            : inputValue;

        // Update state with the selected file or text input value
        setInputs((prev) => ({ ...prev, [name]: inputNumberValue }));
    };

    const [loading, setLoading] = useState(false); // State variable for loading indicator

    const handleClick = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await submit(inputs);
        } finally {
            // Stop loading, whether the submission was successful or not
            setLoading(false);
        }
    }

    console.log("member Editing page : ", member);
    console.log("inputs : ", inputs);

    const submit = async (data) => {
        console.log('Data : ', typeof (data.img), data.img);

        if (member) {
            const file = data.img instanceof File ? await members.uploadFile(data.img) : null;

            if (file) {
                members.deleteFile(member.img);
            }

            const dbMember = await members.updateMember(member.$id, {
                ...data,
                img: file ? file.$id : member.img,
            });

            if (dbMember) {
                navigate(`/member/${dbMember.$id}`);
            }
        } else {
            const file = await members.uploadFile(data.img);

            if (file) {
                const fileId = file.$id;
                data.img = fileId;
                const dbMember = await members.createMember({ ...data });
                console.log("dbMember : ", dbMember);

                if (dbMember) {
                    setTimeout(() => {
                        console.log("File uploaded");
                        navigate(`/member/${dbMember.$id}`);
                    }, 1000);
                }
            }
        }
    };

    const teams = [
        "Faculty coordinator",
        "Governing Body",
        "Web Team",
        "Tech Team",
        "Marketing Team",
        "Public Relations Team",
        "Management Team",
        "Graphics Team",
        "Content Writers Team",
    ];


    return (
        <div className="memberForm">
            <form>
                {member && <img src={members.getFilePreview(member.img)} alt={member.name} />}
                <div className="formElements">
                    {member
                        ? <label htmlFor="img">Change image?</label>
                        : <label htmlFor="img">Image</label>
                    }<input type="file" name="img" placeholder="Event image / banner" onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="name">Name</label><input type="text" name="name" placeholder="Member name" value={inputs.name || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="desc">Description</label><textarea type="text" name="desc" placeholder="Member description" value={inputs.desc || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="post">Post</label><input type="url" name="post" placeholder="Post" value={inputs.post || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="category">Team</label>
                    <select name="category" value={inputs.category} placeholder={inputs.category} onChange={handleChange}>
                        <option value={inputs.category}>{inputs.category || 'Select Team'}</option>
                        {teams.map((team) => (
                            <option key={team} value={team}>
                                {team}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formElements">
                    <label htmlFor="sem">Sem</label><input type="number" name="sem" placeholder="Semister" value={inputs.sem || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="term">Academic year</label><input type="number" name="term" placeholder="Academic Year (2000)" value={inputs.term || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <label htmlFor="dept">Department</label><input type="text" name="dept" placeholder="Department" value={inputs.dept || ''} onChange={handleChange} />
                </div>
                <div className="formElements">
                    <button onClick={handleClick}>Submit</button>
                    <button onClick={() => navigate(`/member/${member.$id}`)}>Back</button>
                </div>
                <div className="formElements">
                    {loading ? 'Submitting...' : null}
                </div>
            </form>
        </div>
    );
}

export default MemberForm