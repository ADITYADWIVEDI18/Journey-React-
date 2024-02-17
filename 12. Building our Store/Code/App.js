
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRouteError,
} from "react-router-dom"; //<------------
// import Grocery from "./components/Grocery";
import { useContext } from "react";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// import { lazy } from "react";
// import { Suspense } from "react";
// const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);

  const [userName, setUserName] = useState("Aditya Dwivedi");

  // for authentication
  useEffect(() => {
    // Make Api call and send username and data
    const data = {
      name: "Aditya Dwivedi",
    };
    setUserName(userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  //<------------
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); // <----------------
