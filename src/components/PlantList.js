import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {



  return (
    <ul className="cards">
      {
      plants.map((el) => {
        return <PlantCard key={el.id} plant={el}/>
      })  
      }
    </ul>
  );
}

export default PlantList;


