// import "./App.css"
import Items from "./components/ItemsList/Items"
import FilterItems from "./components/FilterItems/FilterItems"
import { useState } from "react"
import AddItem from "./components/EditItem/AddItem";
import NavBar from "./components/NavBar/NavBar";

const startupItems = [
  {
    id: 1,
    date: new Date(2021, 6, 8, 8, 10, 0, 0),
    description: "30g Corn Flakes with 150ml fresh milk",
    type: "breakfast",
    calories: 200,
  },
  {
    id: 2,
    date: new Date(2021, 5, 8, 11, 19, 0, 0),
    description: "1 greek yoghurt and 1 medium apple",
    type: "brunch",
    calories: 250,
  },
  {
    id: 3,
    date: new Date(2021, 5, 8, 15, 5, 0, 0),
    description: "200g chicken leg and 100g potatoes in the oven",
    type: "lunch",
    calories: 400,
  },
  {
    id: 4,
    date: new Date(2021, 5, 8, 18, 30, 0, 0),
    description: "1 large banana",
    type: "snack",
    calories: 150,
  },
  {
    id: 5,
    date: new Date(2021, 5, 8, 21, 10, 0, 0),
    description: "200g greek salad (with Feta Cheese, Tomatoes, Cucumber, Onion and olives) and a glass of wine",
    type: "dinner",
    calories: 300,
  }
]


function App() {
  const [items, setItems] = useState(startupItems)

  const [startDate, setStartDate] = useState("")

 const addedItemHandler = (item) => {
    console.log("someone gave me a new metric to add", item)
    // we use the previous state so DO NOT USE THE SIMPLE setMetrics!!!
    // setMetrics([...metrics, metric ]);
    // Instead use the setMetrics that knows about the previous state
    setItems((prevItems)=>{ return [...prevItems, item] });
  }

  const newStartDateSetHandler = (startDate) => {
    console.log("Start date set to ", startDate)
    setStartDate(startDate);

  }

  return (
    
    <div>
      <NavBar/>
      <AddItem onAddItem={addedItemHandler}/>
      <FilterItems startDate={startDate} onSetStartDate={newStartDateSetHandler} />
      <Items filterDate={startDate}  data={items} />

    </div>

  );
}

export default App;