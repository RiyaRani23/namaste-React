import React from "react";
import ReactDOM from "react-dom/client";

// JSX (babel transpiles before it reaches the JS engine) - parcel - babel

// JSX -> Babel transpiles it to React.createElement() -> JS Object -> HTML (DOM)

// React Element
const heading = (
    <h1 className="heading" tabIndex="5">
        Hello from React
    </h1>
);

// React Functional Component 
const Heading = () =>{
    return <h1 className="heading">Hello from react</h1>
};

// both are same 

const HeadingComponent = () => (
    <h1 className="heading">Hello from react</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);