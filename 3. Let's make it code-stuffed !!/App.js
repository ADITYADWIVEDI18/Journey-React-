import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-items">
      <li>Home</li>
        <li>Cateogry</li>
        <li>Order</li>
      </div>
    </nav>
  );
};

const Card = ({resName,cuisine}) => {
  return (
    <div className="card-container">
      <img src="https://th.bing.com/th/id/OIP.X_nFfc10BfOO2nN7xb6eHAHaE7?rs=1&pid=ImgDetMain"></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="fold">
        <Card resName='Meghna Foods' cuisine='Biryani, North India, Asian'/>
        <Card resName='KFC Foods' cuisine='Burger, Fast Food, Chinese'/>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
 
 
