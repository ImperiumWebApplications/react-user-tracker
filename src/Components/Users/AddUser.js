import React, {useState} from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState({title: "", message: ""});

    const usernameChangedHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = () => {
        setError({title: "", message: ""})
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (+age < 0) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (greater than 0)."
            })
            return;
        }

        const newUser = {
            username: username,
            age: age
        }
        props.onAddUser(newUser)
        setUsername('');
        setAge('');
    }

    return (
        <React.Fragment>
            {error.title && error.message &&
                <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id={"username"} type="text" onChange={usernameChangedHandler} value={username}/>
                    <label htmlFor="age">Age</label>
                    <input id={"age"} type="number" onChange={ageChangedHandler} value={age}/>
                    <button type={'submit'}>Add User</button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddUser