import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCateogry = ({data , showItems , setShowIndex }) => {

  const [toggle,setToggle] = useState(true); 

  const handleClick = () => {
    setShowIndex();
  }

  const handleDouble = () => {
    setToggle(!toggle);
  }


  return ( 
    <div>
    <div className="bg-orange-100 w-6/12 mx-auto p-4 my-4 shadow-xl flex justify-between">
      <span className="font-semibold text-xl ">{data.title} ({data.itemCards.length}) </span>
      <span className="cursor-pointer" onClick={handleClick} onDoubleClick={handleDouble}>⬇️</span>
    </div>

     <div> { toggle && showItems && <ItemList items={data.itemCards}/>}</div> 

    </div>
    
  );
};

export default RestaurantCateogry;
