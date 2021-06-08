import MetricItem from "./components/MetricItem"
// import "./App.css"

function App() {

  const metrics = [
    {
        date: new Date(2021, 5, 8, 8, 10, 0, 0),
        description: "30g Corn Flakes with 150ml fresh milk",
        type: "breakfast",
        calories: 200,
      },
    {
      date: new Date(2021, 5, 8, 11, 19, 0, 0),
      description: "1 greek yoghurt and 1 medium apple",
      type: "brunch",
      calories: 250,
    },
    {
      date: new Date(2021, 5, 8, 15, 5, 0, 0),
      description: "200g chicken leg and 100g potatoes in the oven",
      type: "lunch",
      calories: 400,
    },
    {
      date: new Date(2021, 5, 8, 18, 30, 0, 0),
      description: "1 large banana",
      type: "snack",
      calories: 150,
    },
    {
      date: new Date(2021, 5, 8, 21, 10, 0, 0),
      description: "200g greek salad (with Feta Cheese, Tomatoes, Cucumber, Onion and olives) and a glass of wine",
      type: "dinner",
      calories: 300,
    }
  ]

  return (
    <div>
       <h1>Odyssea Calorie Tracker</h1> 
        <h2>Demo List</h2>

      <MetricItem calories={metrics[0].calories} type={metrics[0].type} description={metrics[0].description} date={metrics[0].date} />
      <MetricItem calories={metrics[1].calories} type={metrics[1].type} description={metrics[1].description} date={metrics[1].date} />
      <MetricItem calories={metrics[2].calories} type={metrics[2].type} description={metrics[2].description} date={metrics[2].date} />
      <MetricItem calories={metrics[3].calories} type={metrics[3].type} description={metrics[3].description} date={metrics[3].date} />
      <MetricItem calories={metrics[4].calories} type={metrics[4].type} description={metrics[4].description} date={metrics[4].date} />
    </div>

  );}

  export default App;