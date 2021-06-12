import { Fragment } from "react"
import "./Modal.css"

const Modal = (props) => {
    return (
        <Fragment>
            <div className="backdrop" />
            <div className="modal-content">{props.children}</div>
        </Fragment>
    )
}

export default Modal