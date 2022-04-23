import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import styles from './ErrorModal.module.css'
import Button from "./Button";

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button type={'button'} onClick={props.onClick}>Close</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title}
                                                 message={props.message}
                                                 onClick={props.onClick}/>, document.getElementById('modal-root'))}
        </React.Fragment>
    )
}

export default ErrorModal