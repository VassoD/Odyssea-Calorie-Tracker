import "./ErrorModal.css"
import Card from "./Card"
import Modal from "./Modal"

const ErrorModal = (props) => {
    return (
        <Modal>
            <Card className="error">
                <header className="error__title">
                    <h2>{props.title}</h2>
                </header>
                <div className="error__content">
                    <p>{props.message}</p>
                </div>
                <footer className="error__actions">
                    <button type="button" onClick={props.onDismiss}>OK</button>
                </footer>
            </Card>
        </Modal>
    )
}

export default ErrorModal