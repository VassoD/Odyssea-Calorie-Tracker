import "./FilterMetrics.css"


const FilterMetrics = (props) => {

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
    }

    return (
        <div className="filter-metrics">
            <div className="filter-metrics__elements">
                <div className="filter-metrics__element">
                    <p>Filter the metrics</p>
                </div>
                <div className="filter-metrics__element">
                    <label>Start on</label>
                    <input type="date" value={props.startDate} onChange={startDateChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default FilterMetrics 