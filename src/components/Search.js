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



//I can search for plants by their name and see a filtered list of plants.
//set value to search state
//UPDATE to be e.target.value