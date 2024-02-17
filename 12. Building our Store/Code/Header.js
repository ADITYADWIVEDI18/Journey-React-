import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const navLogo = "https://c8.alamy.com/comp/FXF291/restaurant-cafe-vector-logo-fresh-food-cooking-menu-or-chef-icon-FXF291.jpg";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const onlinestatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext); // Access context value directly
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
      <nav className="flex items-center justify-between w-full h-20 border-solid border-2 bg-orange-200 rounded-md  text-xl">
          <Link to='/'><img src={navLogo} className="w-22 mx-2 h-16" alt="logo"></img></Link>
          <div className="flex mx-7 list-none space-x-8">
              <li>Online Status : {onlinestatus ? "✅" : "🔴"}</li>
              <li className=""><Link to='/'>Home</Link></li>
              <li className=" "><Link to='/about'>About us</Link></li>
              <li className=" "><Link to='/contact'>Contact</Link></li>
              <li className="font-bold text-xl"> <Link to='/cart'>Cart({cartItems.length} items)</Link></li>
              <li className=""><button
                  className=""
                  onClick={() => {
                      setLogBtn(logBtn === "Login" ? "Logout" : "Login");
                  }}
              >
                  {logBtn}
              </button></li>
              <li>{loggedInUser}</li>
          </div>
      </nav>
  );
};

export default Header;

