import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+resId);
      const json = await data.json();

      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  return (
    <div>
      <h1>{name}</h1>
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

