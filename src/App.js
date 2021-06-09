// import "./App.css"
import Metrics from "./components/MetricItem/Metrics"
import FilterMetrics from "./components/FilterMetrics/FilterMetrics"
import { useState } from "react"



const metrics = [
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
  const [startDate, setStartDate] = useState("")


  const newStartDateSetHandler = (startDate) => {
    console.log("Start date set to ", startDate)
    setStartDate(startDate);

  }

  return (
    <div>
      <h1>Odyssea Calorie Tracker</h1>
      <h2>Demo List</h2>
      <FilterMetrics startDate={startDate} onSetStartDate={newStartDateSetHandler} />
      <Metrics filterDate={startDate}  data={metrics} />

    </div>

  );
}

export default App;