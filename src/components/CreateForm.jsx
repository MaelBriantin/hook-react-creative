import React from "react";

const CreateForm = (props) => {
    const createUser = () => {
        const copyUsers = [...props.users]
        let first = document.getElementById('first')
        let last = document.getElementById('last')

        const id = copyUsers[copyUsers.length -1].id +1

            let newUser;

        // eslint-disable-next-line no-unused-expressions
        first.value !== '' && last.value !=='' ? newUser = {
            id: id,
            firstName: first.value,
            lastName: last.value,
        } : ''

        first.value = ''
        last.value = ''

        copyUsers.push(newUser)

        props.addUser(copyUsers)
    }

    return (
        <>
            <label >First Name</label>
            <input type={'text'} id={'first'}/>
            <label>Last Name</label>
            <input type={'text'} id={'last'}/>
            <button onClick={createUser}>Add user</button>
        </>
    )
}

export default CreateForm;