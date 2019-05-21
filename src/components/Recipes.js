import React from "react";

const Recipes = props => {
  return (
    <div>
      <h4>Recipes</h4>
      <ul>
        {props.recipes.map(recipe => {
          return <li key={recipe}>{recipe}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recipes;
