import React, {useState} from "react";

function NewPlantForm({addPlant}) {
const initialForm = {
  name : "",
  image : "",
  price : 0
}

const [formData, setFormData] = useState(initialForm)
// const [stateVariable, setStateFunction] = useState(currentState)

function handleChange(e){
  setFormData({
    ...formData,
    [e.target.name] : e.target.value 
  })
}


function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:6001/plants", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "content-type" : "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    addPlant(data)
  })
}




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        value= {formData.name} 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={(e) => handleChange(e)}
        />
        <input 
        value= {formData.image} 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={(e) => handleChange(e)}
        />
        <input 
        value= {formData.price} 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


//DELIVERABLE #2
// I can add a new plant to the page by submitting the form.

//initial form template
//use state

//change function UPDATES current form state TO REFLECT 
//what user types in (e.target...etc.) by copying OG form object
//add value to EACH affected area
//on change to EACH affected area

//submit function
//POST
//on submit
//