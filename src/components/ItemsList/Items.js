import "./Items.css"
import ItemsList from "./ItemsList.js"
import Card from "../UI/Card"



const Items = (props) => {
    // console.log("filtering on", props.filterDate)
    const date = new Date(props.filterDate)

    const filteredDescriptionItems = props.filterDescription

    const filteredTypeItems = props.filterType


    const deletedItem = (id) => {
        props.onDelete(id)
    }

    const filteredDateItems = props.data.filter(item => {
        return (
            item.date.getYear() === date.getYear() &&
            item.date.getMonth() === date.getMonth() &&
            item.date.getDate() === date.getDate()) &&
            item.description.includes(filteredDescriptionItems) &&
            item.type.includes(filteredTypeItems)
    })


    return (
        <Card className="items">
            <ItemsList data={filteredDateItems} onDelete={deletedItem} />
        </Card>
    )

}

export default Items