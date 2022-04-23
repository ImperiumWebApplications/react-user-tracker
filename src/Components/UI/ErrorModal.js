import Card from "./Card";
import styles from './ErrorModal.module.css'
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClick}/>
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
        </div>
    )
}

export default ErrorModal