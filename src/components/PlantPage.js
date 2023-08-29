import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
//1. create state of plant data
const [plants, setPlants] = useState([])
//4. search state
const [search, setSearch] = useState("")

//1. GET plant data
useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(plants => setPlants(plants))
}, [])


//2. add plant
function addPlant(plant){
  setPlants(
    [...plants, plant]
  )
}


//4. search
const filteredPlants = [...plants].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
