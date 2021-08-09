import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutations';


export default function CreateUser () {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //this is a function to communicate to the backend to create a mutation, using useMutation from apollo client
  const [createUser, {error, loading}] = useMutation(CREATE_USER)

    return (
        <div className="createUser">
          <h3>Create User</h3>
          <input type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}}/>
          <input type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}/>
          <input type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} />
          <button onClick={ () => {
            createUser({
            variables: { name: name, username: username, password:password },
            });
          }}
          >
            Save
          </button>
        </div>
  );
}