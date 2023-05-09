import React, {useState} from "react";

function PlantCard({plant}) {
//sold out state
const [soldOut, setSoldOut] = useState(true)

//click event that UPDATES the state of soldout/instock to the OPPOSITE of the current state
function handleClick(e){
  setSoldOut(!soldOut)
}
 

return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/*the ternary is in {} the TRUTHY value is an ENTIRE button element and its contents, and the FALSEY value is its version of the same*/}
      {/*HAAAADDDD to add an onClick event to EACH button so that it would toggle*/}
      {soldOut ? (
        <button className="primary" onClick={(e) => handleClick(e)}>In Stock</button>
      ) : (
        <button onClick={(e) => handleClick(e)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;


//3. I can mark a plant as "sold out"
//set state to update the status 
//make click function
//function instructs to update the state to the opposite of its current value...creating a boolean
//add onClick to the button itself
//include a ternary to reflect the toggle options