import "./MetricItem.css"
import MetricDate from "./MetricDate"
import Card from "../UI/Card"


const MetricItem = (props) => {
    const dispCalories = props.calories === 0 ? "-" : props.calories;
   
   return <Card className="metric-item">
        <div className="metric-item__meal">
<MetricDate date={props.date}/>
        <h4>{props.description}</h4>
        <h3>{props.type}</h3>
        </div>
        <div className="metric-item__calories">{dispCalories}</div>
</Card>
}

export default MetricItem