import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";

import "./styles.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    console.log(recipes);
  });
  const getRecipes = async recipeName => {
    setRecipes([...recipes, recipeName]);
  };
  return (
    <div className="App">
      <Header />
      <Search getRecipes={getRecipes} />
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Recipes recipes={recipes} />} exact />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
