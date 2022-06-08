
import React, { useState } from 'react';

function Item({ name, category }) {
   const [add, setAdd] = useState(false)
   function handleAdd(){
     setAdd((add)=> !add)
   }

  

  return (
    <li className={add ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button   onClick={handleAdd} className="add">{add ? "Add to cart" : "Remove From Cart" }</button>
    </li>
  );
}

export default Item;
