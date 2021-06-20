import "./Item.css"
import ItemsDate from "./ItemsDate"
import Card from "../UI/Card"
// import DeleteItem from "./DeleteItem"


const Item = (props) => {
        const dispCalories = props.calories === 0 ? "-" : props.calories;

        return <Card className="item">
                <div className="item__meal">
                        <ItemsDate date={props.date} />
                        <h4>{props.description}</h4>
                        <h3>{props.type}</h3>
                </div>
                <div className="item__calories">{dispCalories}</div>
                <div className="add-item__actions">
                <button type="submit" /*onClick={() => handleRemove(items.id)}*/>Delete item</button>
            </div>
        </Card>
}

export default Item