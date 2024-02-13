import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogry from "./RestaurantCateogry";
const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams();
  
  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);
  
  if (!resInfo) {
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const cateogries = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
    c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex flex-col text-center  item-center w-full bg-orange-50 my-auto">
      <h1 className="text-3xl font-bold my-6">{name}</h1>
      <h2 className="text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <h3>Menu</h3>
      <h4>
        {/* {itemCards?.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - (Rs.{item.card.info.price/100})</li>))} */}
        {
          cateogries.map((cateogry) =>( <RestaurantCateogry data={cateogry.card.card} />))
        }
      </h4>
   </div>
  );
};

export default RestaurantMenu;

