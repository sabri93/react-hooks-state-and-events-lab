import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  
  const[color, setColor] = useState(false)

   function handleDarkModeClick(){
     setColor((color) => !color);
     
   }

   
   const appClass = color ? "App dark" : "App light"
   

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button  style = {{ background: appClass}} onClick={handleDarkModeClick} >{color ? "Dark" : "Light"} Mode</button>
      
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
