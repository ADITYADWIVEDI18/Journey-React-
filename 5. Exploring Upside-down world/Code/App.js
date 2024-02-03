
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reslist from "./utils/constants";

const navLogo = "https://img.freepik.com/premium-vector/kitchen-chef-logo-design-template_694967-113.jpg?w=740";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <nav className="nav">
      <img src={navLogo} alt="logo"></img>
      <div className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
        <button
          className="button"
          onClick={() => {
            setLogBtn(logBtn === "Login" ? "Logout" : "Login");
          }}
        >
          {logBtn}
        </button>
      </div>
    </nav>
  );
};

const Card = (props) => {
  const { resName, cuisine, rate, time, imageUrl } = props?.resData?.data;

  return (
    <div className="card-container">
      <img src={imageUrl} alt="restaurant"></img>
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rate} stars</h4>
      <h4>{time}</h4>
    </div>
  );
};

const AppLayout = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(reslist);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState(reslist);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true"
      );
  
      if (!data.ok) {
        throw new Error(`Failed to fetch: ${data.statusText}`);
      }
  
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />

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
              res.data.resName.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filtered);
          }}
        >
          <img src="https://www.igsmonitor.com.au/images/search-icon-hi.png" alt="search icon" />
        </button>

        <button
          className="button"
          onClick={() => {
            const filterpost = listOfRestaurant.filter((res) => res.data.rate > 4);
            setListOfRestaurant(filterpost);
          }}
        >
          Top Rating Restaurants
        </button>
      </div>
      <div className="fold">
        {filteredRestaurant.map((restaurant) => (
          <li key={restaurant.data.id}>
            <Card resData={restaurant} />
          </li>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
