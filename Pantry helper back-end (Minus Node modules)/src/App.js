/*
Author: Christopher Gregg
Purpose: The main file that calls upon the other files to generate the application
*/ 

import Header from "./components/layout/Header";
import Food from "./components/food/Food";
import React, {Fragment, useState} from "react";
import Recipes from "./components/recipies/Recipes";
import LowQuantity from "./components/recipies/LowQuantity";
import NewFood from "./components/food/NewFood";

function App() {
  const [recipesShown, setRecipesShown] = useState(false);
  const [lowQTYShown, setQTYShown] = useState(false);
  const [newFoodShown, setNewShown] = useState(false);

  const showNewFoodHandler = () => {
    setNewShown(true);
  }
  
  const hideNewFoodHandler = () => {
    setNewShown(false);
  }
  const showRecipesHandler = () => {
    setRecipesShown(true);
  }
  
  const hideRecipesHandler = () => {
    setRecipesShown(false);
  }
  const showLowHandler = () => {
    setQTYShown(true);
  }
  
  const hideLowHandler = () => {
    setQTYShown(false);
  }
  return (
    <div>
      <Fragment>
        {(recipesShown && <Recipes onClose={hideRecipesHandler} />) || (lowQTYShown && <LowQuantity onClose={hideLowHandler} />) || (newFoodShown && <NewFood onClose={hideNewFoodHandler} />)}
       <Header onShowRecipes={showRecipesHandler} onShowLow={showLowHandler} onShowNew={showNewFoodHandler} />
       <main>
         <Food />
       </main>
      </Fragment>
    </div>
  );
}

export default App;