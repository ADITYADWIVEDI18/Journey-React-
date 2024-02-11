import { useState, useEffect } from "react";
import Error from "./Error";
// import reslist from "../utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";
import { BODY_API } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = (props) => {

  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState(null);

  useEffect(()=>{fetchData()},[]);

  const fetchData = async () => {
    const data = await fetch(BODY_API);
    const json = await data.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  if (filteredRestaurant === null ) return <Shimmer />  

  return (
    <>
      <div className="search-box">
        <input
          type="search"
          className="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for your stuff..."
        />
        <button
          className="btn-search"
          onClick={() => {
            const filtered = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filtered);
          }}
        >
          <img
            src="https://www.igsmonitor.com.au/images/search-icon-hi.png"
            alt="search icon"
          />
        </button>

        <button
          className="button"
          onClick={() => {
            const filterpost = listOfRestaurant.filter(
              (res) => res.info.avgRating < 4.3
            );
            setListOfRestaurant(filterpost);
          }}
        >
          Top Rating Restaurants
        </button>
      </div>

      <div className="fold">
        {filteredRestaurant.map((restaurant) => (
          <li key={restaurant.info.id} >
          <Link to={"/restaurants/"+restaurant.info.id+"&catalog_qa=undefined&submitAction=ENTER"}>
          <Card resData={restaurant} />
          </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Body;
