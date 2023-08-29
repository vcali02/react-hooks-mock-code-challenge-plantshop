import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">
      {/*1. map array of plant data*/}
    {
      [...plants].map(el => {
        return <PlantCard key={el.id} plant={el}/>
      })
    }
    </ul>
  );
}

export default PlantList;
