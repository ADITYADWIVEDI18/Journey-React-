import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case",()=>{
    
    it("Should load contact us component", () => {
        render(<Contact/>);
    
        // It will find all heading component and give it to heading variable here.
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside Contact Component",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        // Other way to find button
        // const button = screen.getByText("Submit"); If there's a submit text in my component.
    
        expect(button).toBeInTheDocument();
    })
    
    //To load all input boxes 
    it("Should load 2 input boxes on Contact component",()=>{
    
        render(<Contact/>);
    
        //Role for input box is text-box not input.
    
        //Querying 
        const inputBoxes = screen.getAllByRole('textbox');
        // console.log(inputBoxes);
        //It will give the two virtual dom react element.When you have input
        //component , it is basically jsx.Jsx behind the scene at the end of day is react-element.
        //And react element at the end of day is object. 
    
        expect(inputBoxes.length).toBe(2);
        // or   expect(inputBoxes.length).not.toBe(4);
    
    })

})


