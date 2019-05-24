import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipesFromQuery } from "../utils/api_call";

const Recipes = props => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getList() {
      const results = await getRecipesFromQuery(props.recipeName);
      setRecipes(results);
    }
    getList();
  }, [props.recipeName]);

  if (recipes.length === 0) {
    return <div>No Results...</div>;
  } else {
    return (
      <div className="Recipes">
        {recipes.map(recipe => {
          return (
            <div className="recipe-card" key={recipe.recipe_id}>
              <img src={recipe.image_url} />
              <div className="text">
                <h4>{recipe.title}</h4>
                <p>
                  Publisher: <strong>{recipe.publisher}</strong>
                </p>
                <p>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </p>
                <Link to={"/recipe/" + recipe.recipe_id}>View Recipe!</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Recipes;
