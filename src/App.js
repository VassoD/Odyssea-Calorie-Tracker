// import "./App.css"
import Items from "./components/ItemsList/Items"
import FilterItems from "./components/FilterItems/FilterItems"
import { useState } from "react"
import AddItem from "./components/EditItem/AddItem";
import NavBar from "./components/NavBar/NavBar";
// import Modal from "./components/UI/Modal"
// import AuthUserContext from "./store/AuthContext"
// import Login from "./components/Login/Login"



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

  const [filterDescription, setUserDescription] = useState("")

  const [userType, setUserType] = useState("")


  const addedItemHandler = (item) => {
    // console.log("someone gave me a new item to add", item)
    // we use the previous state so DO NOT USE THE SIMPLE setMetrics!!!
    // setMetrics([...metrics, metric ]);
    // Instead use the setMetrics that knows about the previous state
    setItems((prevItems) => { return [...prevItems, item] });
  }

  const newStartDateSetHandler = (startDate) => {
    console.log("Start date set to ", startDate)
    setStartDate(startDate);

  }

  const newUserDescriptionSetHandler = (filterDescription) => {
    console.log('Description search', filterDescription)
    setUserDescription(filterDescription)
  }


  const newUserTypeSetHandler = (userType) => {
    console.log("Type set to ", userType)
    setUserType(userType)
  }

  const deleteHandler = (id) => {
    console.log("delete this", id)
    setItems(items.filter((item) => {
      return (
        item.id !== id)
    }))
  }

  // const onLoginListener = (credentials) => {
  //   console.log("I should authenticate ", credentials)
  //   const theAuthUser = dummyAuthenticator(credentials);
  //   console.log("I have an user ", theAuthUser)
  //   setAuthUser(theAuthUser)
  // }


  // const dummyAuthenticator = (credentials) => {
  //   if (credentials.username.toUpperCase().startsWith("U")) {
  //     return {
  //       id: Math.random(),
  //       username: credentials.username,
  //       name: "Denis",
  //       role: "user"
  //     }
  //   }
  //   if (credentials.username.toUpperCase().startsWith("M")) {
  //     return {
  //       id: Math.random(),
  //       username: credentials.username,
  //       name: "Vasso",
  //       role: "manager"
  //     }
  //   }
  //   return null;

  // }

  // const [authUser, setAuthUser] = useState(null);



  return (

    <div>
      <NavBar />
      {/* {authUser == null && <Modal><Login onLogin={onLoginListener} /></Modal>}
      {authUser !== null && <> */}
      <AddItem onAddItem={addedItemHandler} />
      {/* <AuthUserContext.Provider value={{authUser: authUser }}> */}
      <FilterItems startDate={startDate} onSetStartDate={newStartDateSetHandler} filterDescription={filterDescription} onSetUserDescription={newUserDescriptionSetHandler} userType={userType} onSetUserType={newUserTypeSetHandler} />
      <Items filterDate={startDate} data={items} filterDescription={filterDescription} filterType={userType} onDelete={deleteHandler} />
      {/* </AuthUserContext.Provider> */}
      {/* </>
      } */}
    </div>

  );
}

export default App;