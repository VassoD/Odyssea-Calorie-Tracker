import "./ItemsList.css"
import Item from "./Item"

const ItemsList = (props) => {

    if (props.data.length === 0) {
        return <p className="items-list__empty">No data on that date</p>
    }
    const onDelete = (id) => {
        props.onDelete(id)
    }
    return props.data.map((item) => {
        return <Item key={item.id} id={item.id} calories={item.calories} type={item.type} description={item.description} date={item.date} onDelete={onDelete} />
    })

}


export default ItemsList