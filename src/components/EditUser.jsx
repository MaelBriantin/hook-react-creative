import React, {useEffect} from "react";

const EditUser = (props) => {

        let firstName = props.editUser.firstName
        let lastName = props.editUser.lastName

        const handleChangeFirst = (value) => {
            props.setEdit({...props.editUser, firstName: value})
        }

        const handleChangeLast = (value) => {
            props.setEdit({...props.editUser, lastName: value})
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

    return (
        <>
            <label >First Name</label>
            <input type={'text'} id={'firstInput'} name={'firstInput'} value={props.editUser.firstName} onChange={(e) => handleChangeFirst(e.target.value)}/>
            <label>Last Name</label>
            <input type={'text'} id={'lastInput'} name={'firstInput'} value={props.editUser.lastName} onChange={(e) => handleChangeLast(e.target.value)}/>
            <button onClick={editUser}>Edit user</button>
        </>
    )
}

export default EditUser;