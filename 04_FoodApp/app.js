import React from "react";
import ReactDOM from "react-dom/client";

/*  
Heading
  - logo
  - Nav Items
Body
  - search
  - restaurant list
    - Restaurant Card
      - image
        - name of restaurant,Star Rating,Cuisine,Delivery time
Footer
  -Copyright
  - links   
  - address
  - contact
*/
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                  <img className="logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" alt = "Logo" />
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

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            
        </div>
    )
}

const Body =() => {
    return (
    <div className="body">
     <div className="search">Search</div>
     <div classsName="restau-container"></div>
   </div>)
}

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            // Footer
        </div>
    )
}
        

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);