import {useState} from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const usernameChangedHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 0) {
            return;
        }

        console.log(username, age)

        setUsername('');
        setAge('');
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id={"username"} type="text" onChange={usernameChangedHandler} value={username}/>
                <label htmlFor="age">Age</label>
                <input id={"age"} type="number" onChange={ageChangedHandler} value={age}/>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser