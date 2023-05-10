import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";

function App() {
//fetch state for plants in db.json
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")




//1. GETting plants, useEffect to avoid glitches
useEffect((e) => {
  fetch(`http://localhost:6001/plants`)
  .then(res => res.json())
  //1st instruction post rendering js obj:
  //grab state plants then UPDATE the state to BE the plants obj
  .then(plants => setPlants(plants))
}, [])

//2. adding plant function
const addPlant= (plant) => {
  setPlants(
  [...plants, plant]
  )
}


//4. filter
const filterPlants = [...plants].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase())
})




  return (
    <div className="app">
      <Header />
      {/*1. passing plant state to component*/}
      <PlantPage search={search} setSearch={setSearch} plants={filterPlants} addPlant={addPlant}/>
    </div>
  );
}

export default App;


//1. When the app starts, I can see all plants.
//useState and useEffect
//set state
//useEffect AND fetch
//IN fetch, UPDATE state
//PASS state through components and as props
//MAP through EACH object, ensure they have a key
//attach values to each area


//4. I can search for plants by their name 
//and see a filtered list of plants.
//set state for searching
//change function UPDATING search state to the e.target.value
//FILTER VARIABLE FILTERING through a COPY of the original plants array