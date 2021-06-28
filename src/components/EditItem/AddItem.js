import "./AddItem.css"
import ItemForm from "./ItemForm"
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal"


const AddItem = (props) => {
    const [error, setError] = useState()
    const addedItemHandler = (item) => {
        // console.log("enter a new meal", metric)
        const mandatoryValue = " Please enter your meal's "
        if (item.description.trim().length === 0) {
            setError(mandatoryValue + " description ")
            return false;
        }
        // if (item.date.trim().input ===) {
        //     setError(mandatoryValue + " date " )
        //     return false;
        // }
        if (item.type.trim().length === 0) {
            setError(mandatoryValue + " type ")
            return false;
        }
        if (item.calories.trim().length === 0) {
            setError(mandatoryValue + " calories ")
            return false;
        }

        props.onAddItem(item)
        return true;
    }

    const onDismissModalHandler = () => {
        console.log("Reseting error")
        setError(null)
    }

    return (
        <div className="add-item">
            {error && <ErrorModal title="An error occured" message={error} onDismiss={onDismissModalHandler} />}
            <ItemForm onAddItem={addedItemHandler} />
        </div>
    )
}

export default AddItem