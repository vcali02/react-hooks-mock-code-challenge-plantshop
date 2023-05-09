import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant, setSearch}) {
  return (
    <main>
      {/*passing addPlant to component*/}
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch}/>
      {/*passing plant state to component*/}
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
