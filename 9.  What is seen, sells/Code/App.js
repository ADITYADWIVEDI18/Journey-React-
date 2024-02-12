import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom";             //<------------
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import { Suspense } from "react";
// const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {

    return (
    <div className="app">
      <Header/>
      <Outlet/>     
      <Footer/>
    </div>
  );
};


const appRouter = createBrowserRouter([            //<------------
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)      // <----------------
