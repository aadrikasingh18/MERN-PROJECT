import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    // PROMISES
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate('/Signin')
            // navigate('/login', {replace: true});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
            <h1>LOGOUT KA PAGE</h1>
        </>
    )
}

export default Logout