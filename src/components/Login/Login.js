import "./Login.css"
import LoginForm from "./LoginForm"
import ErrorModal from "../UI/ErrorModal"
import { Fragment, useState } from "react"

const Login = (props) => {
    const [error, setError] = useState()
    const onLoginHandler = (credentials) => {
        console.log("someone gave me credentials", credentials)
        const mandatoryValue = " is mandatory"
        if (credentials.username.trim().length === 0) {
            setError("Username " + mandatoryValue)
            return false;
        }
        if (credentials.password.trim().length === 0) {
            setError("Password " + mandatoryValue)
            return false;
        }

        props.onLogin(credentials)
        return true;
    }

    const onDismissModalHandler = () => {
        console.log("Reseting error")
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal title="Bad credentials" message={error} onDismiss={onDismissModalHandler} />}
            <div className="login">
                <LoginForm onLogin={onLoginHandler} />
            </div>
        </Fragment>
    )
}

export default Login