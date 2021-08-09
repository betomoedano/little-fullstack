import React from 'react'
import {GET_ALL_USERS} from "../Graphql/Queries"
import {useQuery, useMutation} from "@apollo/client"
import {DELETE_USER} from "../Graphql/Mutations"

function ListOfUsers() {

    const {data} = useQuery(GET_ALL_USERS);
    const [deleteUser, {error}] = useMutation(DELETE_USER);

    const onDeleteUser = (id: number):void => {
        deleteUser({variables: {id: id}})
    };
    return (
        <div>
            <h3>Users</h3>
            <table style={{ width:'100%'}}>
                <tbody>
                <tr>
                    {/* <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>ID</th> */}
                    <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>Name</th>
                    <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>Username</th>
                </tr>    
                    { data && (data.getAllUsers.map((user: any) => {
                        return (
                            <tr key= {user.id}>
                                {/* <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>{user.id}</th> */}
                                <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>{user.name}</th>
                                <th style={{textAlign:"left", padding:8, borderBottom:"1px solid #ddd"}}>{user.username}</th>
                                <button onClick={() => {onDeleteUser(user.id)}}>delete</button>
                            </tr>  
                        )
                    }))}
                </tbody>
            </table>                                               
        </div>
    )
}

export default ListOfUsers
