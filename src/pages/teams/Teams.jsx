import React, { useEffect, useState } from 'react';
import './teams.scss';
// import pic from '../../assets/me.jpg';
// import pic from '../../assets/dummyImage.png';
// import sirpic from '../../assets/perurSir.jpg';
import {Team, Button, Loading} from '../../components';
import members from '../../appwrite/members';
import { useSelector } from 'react-redux';

function Teams() {

    // const teams = [
    //     {
    //         $id: 1,
    //         name: 'Varad velangi',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Chair',
    //         category: 'Governing Body',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 2,
    //         name: 'T P Gautami',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Voice Chair',
    //         category: 'Governing Body',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 3,
    //         name: 'Raghu Nippani',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Tresurer',
    //         category: 'Governing Body',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 4,
    //         name: 'Jayesh',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Web head',
    //         category: 'Web Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 5,
    //         name: 'Shashank Chandangiri',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Web head',
    //         category: 'Web Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 6,
    //         name: 'Rakshita Gidd',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Web Team',
    //         sem: 3,
    //         img: pic
    //     },
    //     {
    //         $id: 7,
    //         name: 'Taneeshq Cholekar',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Tech head',
    //         category: 'Tech Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 8,
    //         name: 'Manoj Patil',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Tech head',
    //         category: 'Tech Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 9,
    //         name: 'Subham Mirashi',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Tech Team',
    //         sem: 3,
    //         img: pic
    //     },
    //     {
    //         $id: 10,
    //         name: 'Aryan Thapa',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Marketing head',
    //         category: 'Marketing Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 24,
    //         name: 'Aditya K',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Marketing head',
    //         category: 'Marketing Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 11,
    //         name: 'Dhiral Sharma',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Marketing Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 12,
    //         name: 'Mrunal Pai',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Public relations head',
    //         category: 'Public Relations Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 13,
    //         name: 'Arnav S$iddannavar',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Public relations head',
    //         category: 'Public Relations Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 14,
    //         name: 'Sakshi Pattanashetti',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Public Relations Team',
    //         sem: 3,
    //         img: pic
    //     },
    //     {
    //         $id: 15,
    //         name: 'Shreyas Huddar',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Management Head',
    //         category: 'Management Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 16,
    //         name: 'Nikhil Kulkarni',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Management Head',
    //         category: 'Management Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 17,
    //         name: 'Asadkhan Ustad',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Management Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 18,
    //         name: 'Yash Kulkarni',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Graphics Head',
    //         category: 'Graphics Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 19,
    //         name: 'Ayush Anand',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Graphics Head',
    //         category: 'Graphics Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 20,
    //         name: 'Yashaswini Sukhasare',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Graphics Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 21,
    //         name: 'Sherya Masti',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Content Writers Head',
    //         category: 'Content Writers Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 22,
    //         name: 'Achala Rao',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Content Writers Head',
    //         category: 'Content Writers Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 23,
    //         name: 'Prathamesh Magadum',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: '',
    //         category: 'Content Writers Team',
    //         sem: 5,
    //         img: pic
    //     },
    //     {
    //         $id: 25,
    //         name: 'Shrivasta Perur',
    //         desc: 'Hello, I am passionate about my work. I will dedicate my work for the club.',
    //         post: 'Prof',
    //         category: 'Faculty coordinator',
    //         sem: null,
    //         img: sirpic
    //     },
    // ];

    // const [teams, setTeams] = useState([]);

    const teams = useSelector(state => state.team.memberList);
    const authStatus = useSelector(state => state.auth.status);

    // useEffect(() => {
    //     members.getMembers()
    //         .then((teams) => {
    //             if (teams) {
    //                 setTeams(teams.documents);
    //             }
    //         });
    // }, []);

    console.log('teams: ', teams);

    function filterByCategory(category, team) {
        return team.category === category;
    }

    const facultyList = teams.filter(team => filterByCategory("Faculty coordinator", team));
    const govList = teams.filter(team => filterByCategory("Governing Body", team));
    const webList = teams.filter(team => filterByCategory("Web Team", team));
    const techList = teams.filter(team => filterByCategory("Tech Team", team));
    const managementList = teams.filter(team => filterByCategory("Management Team", team));
    const marketList = teams.filter(team => filterByCategory("Marketing Team", team));
    const publicList = teams.filter(team => filterByCategory("Public Relations Team", team));
    const graphicList = teams.filter(team => filterByCategory("Graphics Team", team));
    const contentList = teams.filter(team => filterByCategory("Content Writers Team", team));



    // return teams.length > 0 ? (
    //     <>
    //         <div className="bod">
    //             <h1>ACM student chapter 2023-24</h1>
    //             {/* <Faculty values={{ category: "Faculty coordinator", list: facultyList }}/> */}
    //             <div className="teams">
    //                 <Team values={{ category: "Faculty coordinator", list: facultyList }} />
    //                 <Team values={{ category: "Governing Body", list: govList }} />
    //                 <Team values={{ category: "Tech Team", list: techList }} />
    //                 <Team values={{ category: "Web Team", list: webList }} />
    //                 <Team values={{ category: "Graphic Designers Team", list: graphicList }} />
    //                 <Team values={{ category: "Public relations Team", list: publicList }} />
    //                 <Team values={{ category: "Marketing Team", list: marketList }} />
    //                 <Team values={{ category: "Management Team", list: managementList }} />
    //                 <Team values={{ category: "Content writers Team", list: contentList }} />
    //             </div>
    //             {authStatus
    //                 && <Button link={`/add-member`} name={'Add new member'} />
    //             }
    //         </div>
    //     </>
    // ) : (
    //     <Loading />
    // );

    return (
        <>
            <div className="bod">
                <h1>ACM student chapter 2023-24</h1>
                {/* <Faculty values={{ category: "Faculty coordinator", list: facultyList }}/> */}
                {teams.length > 0 ? <div className="teams">
                    <Team values={{ category: "Faculty coordinator", list: facultyList }} />
                    <Team values={{ category: "Governing Body", list: govList }} />
                    <Team values={{ category: "Tech Team", list: techList }} />
                    <Team values={{ category: "Web Team", list: webList }} />
                    <Team values={{ category: "Graphic Designers Team", list: graphicList }} />
                    <Team values={{ category: "Public relations Team", list: publicList }} />
                    <Team values={{ category: "Marketing Team", list: marketList }} />
                    <Team values={{ category: "Management Team", list: managementList }} />
                    <Team values={{ category: "Content writers Team", list: contentList }} />
                </div> : <Loading />}
                {authStatus
                    && <Button link={`/add-member`} name={'Add new member'} />
                }
            </div>
        </>
    );
}

export default Teams;