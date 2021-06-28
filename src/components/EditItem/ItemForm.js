import { useState } from "react"
import "./ItemForm.css"
import Input from "../UI/Input"
import React from 'react';

const ItemForm = (props) => {

    const [userDescription, setUserDescription] = useState("")
    const descriptionChangedHandler = (event) => {
        // Whenever I have to use something from an event I should
        // get the values I want in locala variables ASAP
        // and then use the local variables
        // AND FORGET THE event object !!!!!!!!!!!!
        let newValue = event.target.value
        setUserDescription(newValue)
        // console.log(`Someone typed ${userDescription}`)
    }


    const [userDate, setUserDate] = useState("")
    const dateChangedHandler = (event) => {
        let newValue = event.target.value
        setUserDate(newValue)
        // console.log(`Someone typed ${userDate}`)
    }

    const [userType, setUserType] = useState("")
    const typeChangedHandler = (event) => {
        let newValue = event.target.value
        setUserType(newValue)
        // console.log(`Someone typed ${userType}`)
    }

    const [userCalories, setUserCalories] = useState("")
    const caloriesChangedHandler = (event) => {
        let newValue = event.target.value
        setUserCalories(newValue)
        // console.log(`Someone typed ${userCalories}`)
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        const newItem = {
            id: Math.random(),
            date: new Date(userDate),
            description: userDescription,
            type: userType,
            calories: userCalories,
        }

        // console.log("my new metric ", newMetric)
        if (props.onAddItem(newItem)) {

            // console.log("Reseting form data")
            setUserDate("")
            setUserType("")
            setUserDescription("")
            setUserCalories("")
        } else {
            console.log("Error found during validation!!!!")
        }
    }



    return (
        <form onSubmit={onSubmitHandler}>
            <div className="add-item__elements">
                <Input className="add-item__element"
                    labelText="Date"
                    input={{
                        id: "date",
                        type: "datetime-local",
                        inputmode: "numeric",
                        value: userDate,
                        onChange: dateChangedHandler
                    }}
                />
                <Input className="add-item__element"
                    labelText="Description"
                    input={{
                        id: "description",
                        type: "text",
                        placeholder: "Enter the description of your meal",
                        value: userDescription,
                        onChange: descriptionChangedHandler
                    }}
                />
                <label>Type<br></br>
                    <select className="add-item__element" value={userType} onChange={typeChangedHandler}>
                        <option value="" selected disabled hidden>Select type</option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Snack</option>
                        <option>Dinner</option>
                    </select>
                </label>
                <Input className="add-item__element"
                    labelText="Calories"
                    input={{
                        id: "calories",
                        type: "number",
                        placeholder: "Enter the calories of your meal",
                        value: userCalories,
                        onChange: caloriesChangedHandler,
                        min: "0",
                    }}
                />

            </div>
            <div className="add-item__actions">
                <button className="add-button" type="submit">Add item</button>
            </div>
        </form>
    )
}

export default ItemForm