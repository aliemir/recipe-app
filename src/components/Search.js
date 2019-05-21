import React from "react";

const Search = props => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    props.getRecipes(e.target.elements.recipeName.value);
  };
  return (
    <div className="Search">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="recipeName" className="form-input" />
        <button className="form-button">Search!</button>
      </form>
    </div>
  );
};

export default Search;
