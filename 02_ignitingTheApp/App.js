/* 
Parcel does many work for us like -
* created A Server
* HMR - Hot Module Replacement 
* File Watcher Algorithm - C++
* BUNDLING
* MINIFY
* Cleaning our Code by removing console 
* Dev and Production Builds
* Super Fast Build Algorithm
* Image Optimization
* Caching while development
* compression 
* Compatible with older version of browsers (polyfills)
* HTTPS on dev
* manage port Number
* consistent hashing algorithm
* Zero Configuration
* Transitive Dependencies(used this word during Interview)- If A depends on B and B depends on C , then A transitively depends on C
  {We have our package manager which manages these transitive dependencies for us}
*/ 
import React from "react";
import ReactDOM from "react-dom/client"; // /client is important here to import

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{ key: "h1-child-1" },"I am h1 tag inside child 1"),
        React.createElement("h2",{key: "h2-child-1"},"I am h2 tag inside child 1")]
    ),
    React.createElement("div",{id:"child2"},
        React.createElement("h1",{key: "h1-child-2"},"I am h1 tag inside child 2"),
        React.createElement("h2",{key: "h2-child-2"},"I am h2 tag inside child 2")
    )
);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // Render the heading element to the root
    root.render(parent);