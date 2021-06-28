import "./FilterItems.css"



const FilterItems = (props) => {

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
    }

    const userDescriptionChangeHandler = (event) => {
        let newUserDescription = event.target.value
        console.log(newUserDescription)
        props.onSetUserDescription(newUserDescription)
    }

    const userTypeChangeHandler = (event) => {
        let newUserType = event.target.value
        console.log(newUserType)
        props.onSetUserType(newUserType)
    }




    return (
        <div className="filter-items">
            <div className="filter-items__elements">
                <div className="filter-items__element">
                    <p>Filter the items</p>
                </div>
                <div className="filter-items__element">

                    <label>Description:</label>
                    <input type="text"
                        value={props.userDescription} onChange={userDescriptionChangeHandler} />

                    <label>Type:</label>
                    <select name="types" value={props.userType} onChange={userTypeChangeHandler}>
                        <option>Seach by type</option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Snack</option>
                        <option>Dinner</option>
                    </select>

                    <label>Start on</label>
                    <input type="date" value={props.startDate} onChange={startDateChangeHandler} />
                </div>
            </div>
        </div>

    )
}

export default FilterItems