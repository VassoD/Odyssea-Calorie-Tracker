import "./Item.css"
import ItemsDate from "./ItemsDate"
import Card from "../UI/Card"


const Item = (props) => {
        const dispCalories = props.calories === 0 ? "-" : props.calories;
        const handleDelete = () => {
                props.onDelete(props.id)
                // console.log("deleted", props.id)
        }
        return <Card className="item">
                <div className="item__meal">
                        <ItemsDate date={props.date} />
                        <h4>{props.description}</h4>
                        <h4>{props.type}</h4>
                </div>
                <div className="item__calories">{dispCalories}</div>
                <div className="add-item__actions">
                        <button className="delete" onClick={handleDelete} >Delete</button>
                </div>
        </Card>
}

export default Item