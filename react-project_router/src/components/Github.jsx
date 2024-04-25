import React, { useState, useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

function Github() {

   const github_data= useLoaderData()

    // const [gitdata, setGitdata] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.github.com/users/chatterjeekushal');

    //             const data = await response.json();
    //             console.log(data);
    //             setGitdata(data);

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        // <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
        //     Github repos: {gitdata.public_repos}

        //     <img src={gitdata.avatar_url} alt="git_picture" width={300} />

        // </div>


        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
        Github repos: {github_data.public_repos}

        <img src={github_data.avatar_url} alt="git_picture" width={300} />

    </div>


    );
}

export default Github;

export const githubinfoloder = async () => {

    const responce = await fetch("https://api.github.com/users/chatterjeekushal")

    return responce.json()

}
