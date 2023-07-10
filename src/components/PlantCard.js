import React, {useState} from "react";

function PlantCard({plant}) {
const [isSoldOut, setIsSoldOut] = useState(true)

function handleClick(e){
  setIsSoldOut(!isSoldOut)
}



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {isSoldOut ? (
        <button className="primary" onClick={(e) => handleClick(e)}>In Stock</button>
      ) : (
        <button onClick={(e) => handleClick(e)}>Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;



// I can mark a plant as "sold out".
//toggles/click