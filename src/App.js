import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


function App() {
    const [users, setUsers] = useState([]);
    const addUserHandler = (newUser) => {
        setUsers((prevState) => {
            return [...prevState, newUser]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
