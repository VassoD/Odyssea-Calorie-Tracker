import "./Item.css"
import ItemsDate from "./ItemsDate"
import Card from "../UI/Card"


const Item = (props) => {
        const dispCalories = props.calories === 0 ? "-" : props.calories;

        return <Card className="item">
                <div className="item__meal">
                        <ItemsDate date={props.date} />
                        <h4>{props.description}</h4>
                        <h3>{props.type}</h3>
                </div>
                <div className="item__calories">{dispCalories}</div>
        </Card>
}

export default Item