import React from "react";
import ReactDOM from "react-dom/client";

// Normal JS variable
const reslist = [
  {
    data: {
      id: '1',
      resName: 'Meghna Foods',
      cuisine: ['Biryani', 'North India', 'Asian'],
    },
  },
  {
    data: {
      id: '2',
      resName: 'Meghna Foods',
      cuisine: ['Biryani', 'North India', 'Asian'],
    },
  },
];

const Header = () => {
  return (
    <nav className="nav">
      <img src="https://dynamicposbd.com/wp-content/uploads/2022/12/logo-min.webp" alt="logo"></img>
      <div className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </div>
    </nav>
  );
};

const Card = (props) => {
  const { resName, cuisine } = props?.resData?.data;

  return (
    <div className="card-container">
      <img src="https://th.bing.com/th/id/OIP.X_nFfc10BfOO2nN7xb6eHAHaE7?rs=1&pid=ImgDetMain" alt="restaurant"></img>
      <h3>{resName}</h3>
      <h4>{cuisine.join(', ')}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="search-box">
        <input type="search" className="search-bar" placeholder="Search for your stuff..." />
        <img src="https://www.igsmonitor.com.au/images/search-icon-hi.png" alt="search icon" />
      </div>
      <div className="fold">
        {reslist.map((restaurant) => (
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

