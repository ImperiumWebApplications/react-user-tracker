import React, {useState, useRef} from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUser = (props) => {
    const usernameRef = useRef("");
    const ageRef = useRef("");
    const [error, setError] = useState({title: "", message: ""});

    const errorHandler = () => {
        setError({title: "", message: ""})
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (usernameRef.current.value.trim().length === 0 || ageRef.current.value.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (+ageRef.current.value < 0) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (greater than 0)."
            })
            return;
        }

        const newUser = {
            username: usernameRef.current.value,
            age: ageRef.current.value
        }
        console.log(usernameRef.current.value, ageRef.current.value)
        props.onAddUser(newUser)
        usernameRef.current.value = "";
        ageRef.current.value = "";
    }

    return (
        <React.Fragment>
            {error.title && error.message &&
                <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id={"username"} type="text" ref={usernameRef}/>
                    <label htmlFor="age">Age</label>
                    <input id={"age"} type="number" ref={ageRef}/>
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddUser