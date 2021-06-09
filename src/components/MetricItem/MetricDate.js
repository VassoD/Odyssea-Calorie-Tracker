import "./MetricDate.css"

const MetricDate = (props) => {
    const dispDate = props.date.toLocaleString("en-US", 
        {hour: "2-digit", minute: "2-digit", hour12: false});

    return (
        <div className="metric-item__date">{dispDate}</div>
        );
}

export default MetricDate