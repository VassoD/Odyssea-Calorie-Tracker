import "./ItemsDate.css"

const ItemsDate = (props) => {
    const dispDate = props.date.toLocaleString("en-US",
        { year:"2-digit", month:"2-digit", day:"2-digit", hour: "2-digit", minute: "2-digit", hour12: false });

    return (
        <div className="item__date">{dispDate}</div>
    );

}

export default ItemsDate