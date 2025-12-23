/* Parcel does many work for us like -
* HMR - Hot Module Reloading 
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
*/ 




import React from "react";
import ReactDOM from "react-dom/client"; // /client is important here to import

const heading = React.createElement("h1",{
        id : "title"
    },
    "Heading1!");

    const heading2 = React.createElement("h2",
        {
            id :"title"
        },
        "Heading2!"
    )

    const container = React.createElement("div",{
        id : "container"
    },
    {heading, heading2}
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // Render the heading element to the root
    root.render(container);