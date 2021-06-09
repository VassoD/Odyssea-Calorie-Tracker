import "./MetricsList.css"
import MetricItem from "./MetricItem"

const MetricsList = (props) => {
    if (props.data.length === 0) {
        return <p className="metrics-list__empty">No data on that date</p>
    }

    return props.data.map((item) => {
        return <MetricItem key={item.id} calories={item.calories} type={item.type} description={item.description} date={item.date} />
    })
}


export default MetricsList