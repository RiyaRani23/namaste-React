import React from "react";
import ReactDOM from "react-dom/client";

// JSX (babel transpiles before it reaches the JS engine) - parcel - babel

// JSX -> Babel transpiles it to React.createElement() -> JS Object -> HTML (DOM)

// React Element
const Title = () => (
    <h1 className="heading" tabIndex="5">
        Hello from React
    </h1>
);

// React Functional Component - a function that returns React Elements
// Component composition - combining multiple components to create a new one
const Heading = () =>{
    <div id = "container">
    <Title/>
    return <h1 className="heading">Hello from react</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);