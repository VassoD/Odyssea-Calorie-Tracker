import "./MetricItem.css"


const MetricItem = (props) => {
    return (
        <div className="metric-item">
        <div className="metric-item__date">{props.date.toLocaleString()}</div>
        <div className="metric-item__meal">
        <h4>{props.description}</h4>
        <h3>{props.type}</h3>
        </div>
        <div className="metric-item__calories">{props.calories}</div>
</div>
    )
}

export default MetricItem