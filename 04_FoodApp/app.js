import React from "react";
import ReactDOM from "react-dom/client";

/*  
Heading
  - logo

Body
  - search
Footer
  - address
  - contact
*/
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                  <img className="logo" src="https://play.google.com/store/apps/details?id=com.foodflydeliveryapp" alt = "Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>   
                </ul>
            </div>
        </div>
  )
}

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            // Body
            // Footer
        </div>
    )
}
        

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);