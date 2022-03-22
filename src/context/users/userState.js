import React, { useState } from 'react';
import userContext from './userContext';

const UserState = (props) => {
    const host = 'http://localhost:5000';
    const [user, setUser] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        loginID: "",
        location: "",
        isAdmin: ""
    });

    //Login User
    const userLogin = async (creds) => {
        const response = await fetch(`${host}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loginID: creds.loginID,
                password: creds.password
            })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            //Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
        }

        return json;
    }

    const getDataList = async (id) => {
        id = '623876297849263ce95a86f8'
        const response = await fetch(`${host}/userDetails?id:${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json);
    }

    const updateUser = async (creds) => {
        const id = '623876297849263ce95a86f8';
        
        const response = await fetch(`${host}/user/updateContact?id:${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newName: creds.name,
                newMail: creds.email,
                newPhn: creds.phoneNumber
            })
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    return (
        <userContext.Provider value={{updateUser, userLogin, getDataList}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;