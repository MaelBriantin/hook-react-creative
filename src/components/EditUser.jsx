import React, {useEffect} from "react";

const EditUser = (props) => {

        let firstName = props.editUser.firstName
        let lastName = props.editUser.lastName

        let firstInput = document.getElementById('first')
        let lastInput = document.getElementById('last')

        const handleChangeFirst = (e) => {
            firstName = e.target.value
        }

        const handleChangeLast = (e) => {
            lastName = e.target.value
        }

        const editUser = () => {
            const editedUser = {
                id: props.editUser.id,
                firstName: firstName,
                lastName: lastName
            }

            const copyUserList = [...props.userList]
            props.setUser(copyUserList.map(item => {
                if(item.id === editedUser.id){
                    return {...item, firstName: editedUser.firstName, lastName: editedUser.lastName}
                }
                return item
            }
            )
        )
        }

        useEffect(()=> {

        })

    return (
        <>
            <label >First Name</label>
            <input type={'text'} id={'firstInput'} name={'firstInput'} defaultValue={firstName} onChange={handleChangeFirst}/>
            <label>Last Name</label>
            <input type={'text'} id={'lastInput'} name={'firstInput'} defaultValue={lastName} onChange={handleChangeLast}/>
            <button onClick={editUser}>Edit user</button>
        </>
    )
}

export default EditUser;