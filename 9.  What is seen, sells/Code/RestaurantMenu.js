import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams();
  
  const resInfo = useRestaurantMenu(resId);
  
  if (!resInfo) {
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  

  return (
    <div className="flex flex-col text-center  item-center w-full bg-orange-50 my-auto">
      <h1 className="text-2xl">{name}</h1>
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <h3>Menu</h3>
      <h4>
      <ul>
        {itemCards?.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - (Rs.{item.card.info.price/100})</li>))}
      </ul>
      </h4>
      
    </div>
  );
};

export default RestaurantMenu;

