import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";

it("Should load Header Component with a login button", () => {
  // Render first
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying 
  //If there are multiple button and i have to find button with name login button.
  const loginButton = screen.getByRole("button",{name:"Login"});

  //Assertion
  expect(loginButton).toBeInTheDocument();

});

it("Should render Header Component with a cart items 0 button", () => {
    // Render first
      render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //Querying 
    //If there are multiple button and i have to find button with name login button.
    const cartItems = screen.getByText("Cart(0 items)");
  
    //Assertion
    expect(cartItems).toBeInTheDocument();
  
  });

  it("Should change Login Button on click", () => {
    // Render first
      render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //Querying 
    const loginButton = screen.getByRole("button",{name:"Login"});
  
    //After firing click event it changed it into Logout Buttin.
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  
  });

