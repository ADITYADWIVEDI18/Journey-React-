import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCateogry = ({data}) => {
  const showHide = () =>{
    setShowItem(!showItem);    
    console.log("Clicked");
  }
  const [showItem , setShowItem]=useState(false);

  return ( 
    <div>
    <div className="bg-orange-100 w-6/12 mx-auto p-4 my-4 shadow-xl flex justify-between">
      <span className="font-semibold text-xl ">{data.title} ({data.itemCards.length}) </span>
      <span onClick={showHide} className="cursor-pointer">⬇️</span>
    </div>

     <div> { showItem && <ItemList items={data.itemCards}/>}</div> 

    </div>
    
  );
};

export default RestaurantCateogry;
