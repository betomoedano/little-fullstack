import React, {useState} from 'react'
import {UPDATE_PASSWORD} from "../Graphql/Mutations"
import {useMutation} from "@apollo/client"

function UpdatePassword() {

    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    //this is a function to communicate to the backend to create a mutation, using useMutation from apollo client
    const [updatePassword,{error}] = useMutation(UPDATE_PASSWORD);

    const onUpdatePassword =  (username:string, currentPassword:string, newPassword:string) => {
        updatePassword({variables: {
            username: username, 
            oldPassword:currentPassword, 
            newPassword: newPassword 
            }
        });
    };

    if( error ) {
        return (<div>error, verify your information...</div>)
    }
    return (
        <div>
            <h3>Update Password</h3>
            <input type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}/>
            <input type="password" placeholder="Current Password" onChange={(event) => {setCurrentPassword(event.target.value)}}/>
            <input type="password" placeholder="New Password" onChange={(event) => {setNewPassword(event.target.value)}}/>    
            <button onClick={()=> onUpdatePassword(username, currentPassword, newPassword)}> UPDATE PASSWORD </button>        
        </div>
    )
}

export default UpdatePassword
