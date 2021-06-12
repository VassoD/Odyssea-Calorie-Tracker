import "./Items.css"
import ItemsList from "./ItemsList.js"
import Card from "../UI/Card"

const Items = (props) => {
    // console.log("filtering on", props.filterDate)
    const date = new Date(props.filterDate)

    const filteredItems = props.data.filter( item => {
        return (
            item.date.getYear() === date.getYear() &&
            item.date.getMonth() === date.getMonth() &&
            item.date.getDate() === date.getDate())
    })

    return (
        <Card className="items">
            <ItemsList data={filteredItems}/>
        </Card>
    )
}

export default Items