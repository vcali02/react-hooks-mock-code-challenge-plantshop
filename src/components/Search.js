import React from "react";

function Search({search, setSearch}) {

function handleChange(e){
  setSearch(e.target.value)
}



  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;



//4. I can search for plants by their name 
//and see a filtered list of plants.
//set state for searching in PARENT component
//FILTER plants IN parent component by copying the original plant array, filtering by each element
//and returning the element (plant) name in lower case and ensuring it matches the search
//PASS the search state function down to child components as props
//IN search component:
//create change function UPDATING search state to the e.target.value
//ADD onChange to button