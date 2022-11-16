import CreateForm from "./components/CreateForm";
import UserList from "./components/UserList";
import {useState} from "react";
import EditUser from "./components/EditUser";

function App() {
    const [users, setUser] = useState([
        {
            id: 1,
            firstName: 'Jean',
            lastName: 'Jean',
        }
    ])
    const [edit, setEdit] = useState(
        {
            id: 0,
            firstName: '',
            lastName: ''
        }
    )


    const displayUser = (id) => {
        const editUser = users.find(e => e.id === id)
        setEdit(editUser)
    }

    return (
      <div>
        <p>Bordel ce serait bien que ça fonctionne cette fois</p>
        <CreateForm addUser={setUser} users={users}/>
          <br/>
          <EditUser editUser={edit} userList={users} setEdit={setEdit} setUser={setUser}/>
        <UserList users={users} setUser={setUser} displayUser={displayUser}/>
      </div>
  );
}

export default App;
