import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
//plant state
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(plants => setPlants(plants))
}, [])

//function to ADD form plant TO current state of PLANTS
function addPlant(plant){
  //UPDATES current state of plants
  setPlants(
    //copies the OG plants array
    //ADDS A PLACEHOLDER FOR THE NEW PLANT
    [...plants, plant]
    //returns the copy of the OG WITH the NEW
  )
}


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





//DELIVERABLE #1
//When the app starts, I can see all plants.

//useEffect, use state
//GET/fetch

//pass props to children
//map through to apply to EACH plant
//pass to children
