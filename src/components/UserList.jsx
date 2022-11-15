import React from "react";

const UserList = (props) => {
    const removeUser = (id) => {
        const copyUsers = [...props.users]
        props.setUser(copyUsers.filter(e => e.id !== id))
    }


    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Operations</td>
                </tr>
            </thead>
            <tbody>
            {props.users.map(e => {
                return (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td><button onClick={()=>props.displayUser(e.id)}>Edit</button><button onClick={() => removeUser(e.id)}>Delete</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default UserList;