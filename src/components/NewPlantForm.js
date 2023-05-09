import React, {useState} from "react";

function NewPlantForm({addPlant}) {
//initial form object
const initialForm= {
  name: "",
  image: "",
  price: 0,
}

//form state
const [form, setForm] = useState(initialForm)

//CHANGE f() UPDATE the value of the form to that of the INPUT
function handleChange(e) {
  return setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

//SUBMIT and POST
function handleSubmit(e) {
  e.preventDefault()
  fetch(`http://localhost:6001/plants`, {
    method: 'POST',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(form)
  })
  .then(res => res.json())
  .then(data => {
    addPlant(data)
    setForm(initialForm)
  })
}




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={form.name} type="text" name="name" placeholder="Plant name" onChange={(e) => handleChange(e)}/>
        <input value={form.image} type="text" name="image" placeholder="Image URL" onChange={(e) => handleChange(e)}/>
        <input value={form.price} type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


//2. I can add a new plant to the page by submitting the form.
//create form state
//create initial form
//form initial state IS initial form
//change input values to 