import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [lightMode, setLightMode] = useState(true)
  
  function handleToggle(){
    setLightMode((lightMode) => !lightMode)    
  }

  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={lightMode ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{lightMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
