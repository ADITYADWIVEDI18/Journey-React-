import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const navLogo = "https://c8.alamy.com/comp/FXF291/restaurant-cafe-vector-logo-fresh-food-cooking-menu-or-chef-icon-FXF291.jpg";

const Header = () => {
    const [logBtn, setLogBtn] = useState("Login");
    const onlinestatus = useOnlineStatus();
    return (
         <nav className="flex items-center justify-between w-full h-20 border-solid border-2 bg-orange-200 shadow-lg text-xl">
        <Link to='/'><img src={navLogo} className="w-13 h-16" alt="logo"></img></Link>
        <div className="flex mx-7 list-none space-x-4">
          <li>Online Status : {onlinestatus ? "✅" : "🔴"}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/error'>Cart</Link></li>
          <li><button
            className=""
            onClick={() => {
              setLogBtn(logBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {logBtn}
          </button></li>
        </div>
      </nav>
     
    );
  };

  export default Header;
