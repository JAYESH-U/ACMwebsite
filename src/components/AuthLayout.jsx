import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true, }) {
    console.log("authentication : ",authentication);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);
    console.log("authStatus : ", authStatus);

    useEffect(() => {

        // if (authStatus == true) {
        //     navigate("/");
        // } else if (authStatus === false) {
        //     navigate("/login");
        // }

        if (authentication && authStatus !== authentication) {
            console.log("not authenticated....");
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            console.log("no need for authenticattion...");
            // console.log('redirecting to "/"');
            // navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}