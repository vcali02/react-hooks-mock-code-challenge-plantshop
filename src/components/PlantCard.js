import React, {useState} from "react";

function PlantCard({plant}) {
//3. plant sold out state
const [soldOut, setSoldOut] = useState(true)
  
  //3.plant sold out
  function handleClick(e){
    setSoldOut(!soldOut)
  }
  
  //1. display single plant data
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {soldOut ? (
        <button className="primary" onClick={(e) => handleClick(e)}>In Stock</button>
      ) : (
        <button onClick={(e) => handleClick(e)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
