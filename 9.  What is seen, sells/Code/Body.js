import { useState, useEffect } from "react";
import Error from "./Error";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  
   const onlinestatus = useOnlineStatus();
  if(onlinestatus===false)
    {
      return (
        <h1>Look like you're offline !! Please check your internet connection</h1>
      )
    }
  if (filteredRestaurant === null ) return <Shimmer />  

  return (
    <>
      <div className=" flex justify-center w-full p-5 space-x-12">
        <div className=" flex w-6/12 space-x-1">
        <input
          type="search"
          className=" w-full p-2 border border-2 border-solid border-gray-300 rounded-xl text-orange"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for your stuff..."
        />
        <button
          className="bg-orange-300 p-2 rounded-md "
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
            className="w-6"
          />
        </button>

        </div>
        
        <button
          className="bg-orange-300 p-2 rounded-md"
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

      <div className="flex flex-wrap justify-center list-none font-sans">
        {filteredRestaurant.map((restaurant) => (
          <li key={restaurant.info.id} className="">
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
