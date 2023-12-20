import React from 'react';
import './teams.scss';
import pic from '../../assets/dummyImage.png';
import Team from './team/team';

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
            name: 'Taneeshq Cholekar',
            post: 'Web head',
            category: 'Web Team',
            sem: 5,
            img: pic
        },
        {
            id: 7,
            name: 'Manoj Patil',
            post: 'Web head',
            category: 'Web Team',
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

    // console.log(govList);


    return (
        <>
            <div className="teams">
                <Team values={{category: "Governing Body", list: govList}}/>
                <Team values={{category: "Web Team", list: webList}}/>
            </div>
        </>
    );
}

export default Teams;