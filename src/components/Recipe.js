import React, { useEffect } from "react";

const Recipe = props => {
  useEffect(() => {
    console.log("effect");
  });
  return (
    <div>
      <h4>Recipe Details</h4>
      {props.match.params.id}
      {props.recipe}
    </div>
  );
};

export default Recipe;
