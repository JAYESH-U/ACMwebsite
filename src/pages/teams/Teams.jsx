import React, { useEffect, useState } from 'react';
import './teams.scss';
// import pic from '../../assets/me.jpg';
// import pic from '../../assets/dummyImage.png';
// import sirpic from '../../assets/perurSir.jpg';
import Team from '../../components/team/Team';
import members from '../../appwrite/members';
import Loading from '../../components/loading/Loading';
import Button from '../../components/button/Button';

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

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        members.getMembers()
            .then((teams) => {
                if (teams) {
                    setTeams(teams.documents);
                }
            });
    }, []);

    console.log(teams);

    function faculty(team) {
        return team.category == "Faculty coordinator";
    }
    const facultyList = teams.filter(faculty);

    function governing(team) {
        return team.category == "Governing Body";
    }
    const govList = teams.filter(governing);

    function webteam(team) {
        return team.category == "Web Team";
    }
    const webList = teams.filter(webteam);

    function techTeam(team) {
        return team.category == "Tech Team";
    }
    const techList = teams.filter(techTeam);

    function managementTeam(team) {
        return team.category == "Management Team";
    }
    const managementList = teams.filter(managementTeam);

    function marketingTeam(team) {
        return team.category == "Marketing Team";
    }
    const marketList = teams.filter(marketingTeam);

    function publicTeam(team) {
        return team.category == "Public Relations Team";
    }
    const publicList = teams.filter(publicTeam);

    function graphicTeam(team) {
        return team.category == "Graphics Team";
    }
    const graphicList = teams.filter(graphicTeam);

    function contentTeam(team) {
        return team.category == "Content Writers Team";
    }
    const contentList = teams.filter(contentTeam);



    return teams.length > 0 ? (
        <>
            <div className="bod">
                <h1>ACM student chapter 2023-24</h1>
                {/* <Faculty values={{ category: "Faculty coordinator", list: facultyList }}/> */}
                <div className="teams">
                    <Team values={{ category: "Faculty coordinator", list: facultyList }} />
                    <Team values={{ category: "Governing Body", list: govList }} />
                    <Team values={{ category: "Tech Team", list: techList }} />
                    <Team values={{ category: "Web Team", list: webList }} />
                    <Team values={{ category: "Graphic Designers Team", list: graphicList }} />
                    <Team values={{ category: "Public relations Team", list: publicList }} />
                    <Team values={{ category: "Marketing Team", list: marketList }} />
                    <Team values={{ category: "Management Team", list: managementList }} />
                    <Team values={{ category: "Content writers Team", list: contentList }} />
                </div>
                <Button link={`/add-member`} name={'Add new member'} />
            </div>
        </>
    ) : (
        <Loading />
    );
}

export default Teams;