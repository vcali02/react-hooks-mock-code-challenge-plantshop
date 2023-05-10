import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {



  return (
    <ul className="cards">
      {/*DON'T FORGET TO MAKE A COPY OF THE ARRAY*/}
      {
      [...plants].map((el) => {
        return <PlantCard key={el.id} plant={el}/>
      })  
      }
    </ul>
  );
}

export default PlantList;


