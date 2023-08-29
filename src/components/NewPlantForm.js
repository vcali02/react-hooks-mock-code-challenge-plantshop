import React, {useState} from "react";

function NewPlantForm({addPlant}) {
//2. initial form
const initialForm = {
  name : "",
  image : "",
  price : 0
}

//2. form data state
const [formData, setFormData] = useState(initialForm)

//2. remember: handle change registers the CHANGE of the user typing in the input field
function handleChange(e){
  //2. updating the form data; object
  setFormData({
    ///formData,
    [e.target.name] : e.target.value
  })
}

//2. submission to update json data; POST
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
  .then( data => {
    addPlant(data)
  })
}



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        value={formData.name}
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={(e) => handleChange(e)}
        />
        <input 
        value={formData.image}
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={(e) => handleChange(e)}
        />
        <input 
        value={formData.price}
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
