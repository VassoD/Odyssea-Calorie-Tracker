import "./Input.css"

const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.input.id}>{props.labelText}</label>
            <input {...props.input} />
        </div>
    )
}

export default Input;