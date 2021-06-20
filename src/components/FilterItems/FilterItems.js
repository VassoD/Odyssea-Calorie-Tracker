import "./FilterItems.css"


const FilterItems = (props) => {

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
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
                <label>Type:</label>
                <select value={props.userType} onChange={userTypeChangeHandler}>
                    <option>Select meal type</option>
                    <option>Breakfast</option>
                    <option>Brunch</option>
                    <option>Lunch</option>
                    <option>Snack</option>
                    <option>Dinner</option>
                </select>
                 <label>Start on</label>
                    <input type="date" value={props.startDate} onChange={startDateChangeHandler}/>
                </div>
            </div>
        </div>
        
    )
}

export default FilterItems 