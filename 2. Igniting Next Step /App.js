import React from "react";
import ReactDOM  from "react-dom/client";

// React Elements

// const heading = React.createElement("h1" , {id:'heading'},"NamRea");

// const jsxheading = <h1 className="head">NamRea using JSX!!</h1>

const elem = <span>--React Element-- </span>
const Title = () => (
    <h1 className="head">
        React from Title Component.
    </h1>
)

const HeadingComponent = () => (
    <div id='container'>
        <Title />
        {smallheading}
        <h1 className="heading">React from Heading Component.</h1>
    </div>
)
const smallheading = (
    <h1 className="small">
    {elem}
    This is JS variable.
    </h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>)
