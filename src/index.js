import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";

import "./styles.css";

function App() {
  const [recipeName, setRecipeName] = useState("");

  const getRecipeName = recipe => {
    setRecipeName(recipe);
  };

  return (
    <div className="App">
      <Header />
      <Search getRecipeName={getRecipeName} />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => <Recipes recipeName={recipeName} />}
            exact
          />
          <Route path="/recipe/:id" render={props => <Recipe {...props} />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
