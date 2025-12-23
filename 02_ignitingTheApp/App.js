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