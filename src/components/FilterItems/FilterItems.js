import "./FilterItems.css"


const FilterItems = (props) => {

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
    }

    return (
        <div className="filter-items">
            <div className="filter-items__elements">
                <div className="filter-items__element">
                    <p>Filter the items</p>
                </div>
                <div className="filter-items__element">
                    <label>Start on</label>
                    <input type="date" value={props.startDate} onChange={startDateChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default FilterItems 