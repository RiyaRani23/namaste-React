import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiles before it reaches the JS engine) - parcel - babel

// JSX -> React.createElement() -> JS Object -> HTML (DOM)
const jsxHeading = <h1 id="title" className="headClass" key="h1tag">Hello from JSX Heading!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);