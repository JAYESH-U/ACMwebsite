import React from 'react';
import './archives.scss';
import { Archive, Button, ArchiveForm } from '../../components';
import { useSelector } from 'react-redux';

function Archives() {

    const authStatus = useSelector((state) => state.auth.status);
    const archiveList = useSelector((state) => state.archives.archiveList);

    console.log('archiveList', archiveList);

    // const archives = [
    //     {
    //         '$id': 1,
    //         'name': "Quizmania",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 2,
    //         'name': "Quizmania",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 3,
    //         'name': "Quizmania 222222",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 4,
    //         'name': "Quizmania 222222",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 5,
    //         'name': "Quizmania 222222",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 6,
    //         'name': "Quizmania 2",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 7,
    //         'name': "Quizmania 222222",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    //     {
    //         '$id': 8,
    //         'name': "Quizmania 2",
    //         'desc': `Conducted Four types of quizes
    //                 1. Technical Quiz
    //                 2. Meme Quiz
    //                 3. Anime Quiz
    //                 4. Entertainment Quiz`,
    //         'date': "12/12/12",
    //         'reportUrl': 'https://drive.google.com/file/d/1xV4kV3zvfsqqzm4NkkmiMxHqLk_3z_bC/view?usp=sharing',
    //     },
    // ];

    return (
        <div className='archives'>
            {/* {authStatus
                && <Button link={'/add-archive'} name={'Add report'} />
            } */}
            {authStatus
                && <ArchiveForm />
            }
            <h1>Archives</h1>
            <div className="archiveCards">
                {
                    archiveList.map((archive) => (
                        <Archive key={archive.$id} archive={archive} />
                    ))
                }
            </div>
        </div>
    )
}

export default Archives