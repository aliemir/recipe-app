import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipeFromId } from "../utils/api_call";

const Recipe = props => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipeFromId(props.match.params.id);
      setRecipe(result);
    };
    fetchData();
  }, [props.match.params.id]);

  if (Object.keys(recipe).length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h4>
          {recipe.title}, #{recipe.recipe_id}
        </h4>
        <p>
          <img src={recipe.image_url} />
        </p>
        <ul>
          {recipe.ingredients.map(ing => {
            return <li key={ing}>{ing}</li>;
          })}
        </ul>
        <p>
          <a href={recipe.source_url}>Go To Source</a>
        </p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    );
  }
};

export default Recipe;
