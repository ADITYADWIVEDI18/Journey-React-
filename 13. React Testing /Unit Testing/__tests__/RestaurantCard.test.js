import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from '../Card';
import MOCK_DATA from "../mocks/resCardMock.json";
it("Should Check Restaurant Card",()=>{
        //Rendering 
        render(<Card resData={MOCK_DATA}/>);

        //Querying
        const name = screen.getByText("Dum Biryani Hub");

        //Assertion
        expect(name).toBeInTheDocument();
        
})
