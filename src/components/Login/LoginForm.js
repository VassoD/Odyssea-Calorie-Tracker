import { useState } from "react"
import Input from "../UI/Input"
import "./LoginForm.css"

const LoginForm = (props) => {
    const [username, setUsername] = useState("")
    const usernameChangedHandler = (event) => {
        let newValue =  event.target.value
        setUsername(newValue)
        console.log(`Someone typed ${username}`)
    }

    const [password, setPassword] = useState("")
    const passwordChangedHandler = (event) => {
        let newValue =  event.target.value
        setPassword(newValue)
        console.log(`Someone typed ${password}`)
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        const credentials = {
            username: username,
            password: password,
        }

        console.log("credentials ", credentials)
        if (props.onLogin(credentials)) {
            console.log("Reseting form data")
            setUsername("")
            setPassword("")
        } else {
            console.log("Error found during validation!!!!")
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="login__elements">
                <Input className="login__element"
                    labelText="Username"
                    input={{
                        id: "username",
                        type: "text",
                        onChange: usernameChangedHandler
                    }}

                />
                <Input className="login__element"
                    labelText="Password"
                    input={{
                        id: "password",
                        type: "password",
                        onChange: passwordChangedHandler
                    }}
                />
            </div>
            <div className="login__actions">
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm
