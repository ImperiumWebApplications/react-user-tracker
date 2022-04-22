import {useState} from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
    const [username, setUsername] = useState();
    const [age, setAge] = useState();

    const usernameChangedHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        console.log(username, age)
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id={"username"} type="text" onChange={usernameChangedHandler}/>
                <label htmlFor="age">Age</label>
                <input id={"age"} type="text" onChange={ageChangedHandler}/>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser