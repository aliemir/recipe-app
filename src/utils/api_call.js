const API_KEY = "API_KEY_HERE";

export const getRecipesFromQuery = async query => {
  const api_call = await fetch(
    `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${query}&count=10`
  );
  const data = await api_call.json();
  return data.recipes;
};

export const getRecipeFromId = async id => {
  const api_call = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`
  );
  const data = await api_call.json();
  return data.recipe;
};
