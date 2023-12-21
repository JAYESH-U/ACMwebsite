import React from 'react';
import './teams.scss';
import pic from '../../assets/dummyImage.png';
import Team from '../../components/teams/team/Team';
import Faculty from '../../components/teams/faculty/Faculty';

function Teams() {

    const teams = [
        {
            id: 1,
            name: 'Varad velangi',
            post: 'Chair',
            category: 'Governing Body',
            sem: 5,
            img: pic
        },
        {
            id: 2,
            name: 'T P Gautami',
            post: 'Voice Chair',
            category: 'Governing Body',
            sem: 5,
            img: pic
        },
        {
            id: 3,
            name: 'Raghu Nippani',
            post: 'Tresurer',
            category: 'Governing Body',
            sem: 5,
            img: pic
        },
        {
            id: 4,
            name: 'Jayesh',
            post: 'Web head',
            category: 'Web Team',
            sem: 5,
            img: pic
        },
        {
            id: 5,
            name: 'Shashank Chandangiri',
            post: 'Web head',
            category: 'Web Team',
            sem: 5,
            img: pic
        },
        {
            id: 6,
            name: 'Rakshita Gidd',
            post: '',
            category: 'Web Team',
            sem: 3,
            img: pic
        },
        {
            id: 7,
            name: 'Taneeshq Cholekar',
            post: 'Tech head',
            category: 'Tech Team',
            sem: 5,
            img: pic
        },
        {
            id: 8,
            name: 'Manoj Patil',
            post: 'Tech head',
            category: 'Tech Team',
            sem: 5,
            img: pic
        },
        {
            id: 9,
            name: 'Subham Mirashi',
            post: '',
            category: 'Tech Team',
            sem: 3,
            img: pic
        },
        {
            id: 10,
            name: 'Aryan Thapa',
            post: 'Marketing head',
            category: 'Marketing Team',
            sem: 5,
            img: pic
        },
        {
            id: 24,
            name: 'Aditya K',
            post: 'Marketing head',
            category: 'Marketing Team',
            sem: 5,
            img: pic
        },
        {
            id: 11,
            name: 'Dhiral Sharma',
            post: '',
            category: 'Marketing Team',
            sem: 5,
            img: pic
        },
        {
            id: 12,
            name: 'Mrunal Pai',
            post: 'Public relations head',
            category: 'Public Relations Team',
            sem: 5,
            img: pic
        },
        {
            id: 13,
            name: 'Arnav Siddannavar',
            post: 'Public relations head',
            category: 'Public Relations Team',
            sem: 5,
            img: pic
        },
        {
            id: 14,
            name: 'Sakshi Pattanashetti',
            post: '',
            category: 'Public Relations Team',
            sem: 3,
            img: pic
        },
        {
            id: 15,
            name: 'Shreyas Huddar',
            post: 'Management Head',
            category: 'Management Team',
            sem: 5,
            img: pic
        },
        {
            id: 16,
            name: 'Nikhil Kulkarni',
            post: 'Management Head',
            category: 'Management Team',
            sem: 5,
            img: pic
        },
        {
            id: 17,
            name: 'Asadkhan Ustad',
            post: '',
            category: 'Management Team',
            sem: 5,
            img: pic
        },
        {
            id: 18,
            name: 'Yash Kulkarni',
            post: 'Graphics Head',
            category: 'Graphics Team',
            sem: 5,
            img: pic
        },
        {
            id: 19,
            name: 'Ayush Anand',
            post: 'Graphics Head',
            category: 'Graphics Team',
            sem: 5,
            img: pic
        },
        {
            id: 20,
            name: 'Yashaswini Sukhasare',
            post: '',
            category: 'Graphics Team',
            sem: 5,
            img: pic
        },
        {
            id: 21,
            name: 'Sherya Masti',
            post: 'Content Writers Head',
            category: 'Content Writers Team',
            sem: 5,
            img: pic
        },
        {
            id: 22,
            name: 'Achala Rao',
            post: 'Content Writers Head',
            category: 'Content Writers Team',
            sem: 5,
            img: pic
        },
        {
            id: 23,
            name: 'Prathamesh Magadum',
            post: '',
            category: 'Content Writers Team',
            sem: 5,
            img: pic
        },
    ];

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



    return (
        <>
            <div className="bod">
                <h1>ACM student chapter 2023-34</h1>
                <Faculty />
                <div className="teams">
                    <Team values={{ category: "Governing Body", list: govList }} />
                    <Team values={{ category: "Web Team", list: webList }} />
                    <Team values={{ category: "Tech Team", list: techList }} />
                    <Team values={{ category: "Graphic Designers Team", list: graphicList }} />
                    <Team values={{ category: "Public relations Team", list: publicList }} />
                    <Team values={{ category: "Marketing Team", list: marketList }} />
                    <Team values={{ category: "Management Team", list: managementList }} />
                    <Team values={{ category: "Content writers Team", list: contentList }} />
                </div>
            </div>
        </>
    );
}

export default Teams;