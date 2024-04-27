import React from "react";

import UserContext from "./UserContext";

import { useState } from "react";

const UserContextprovider=({children})=>{

    const [user, setuser] = useState(null)

    const [job, setjob] = useState(null)

    return (

        <UserContext.Provider value={{user,setuser,job,setjob}}>
        {children}
        
        </UserContext.Provider>
    )

}

export default UserContextprovider