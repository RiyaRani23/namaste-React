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

const RestaurantCard = (props) => {
    const {resData} = props;

    return (
        <div className="res-card" style={{backgroundColor:"#dbd9d9ff"}}>
            <img 
            className="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" 
             alt="Res-Logo" />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines}</h4>
            <h4>{resData.data.avgRating}</h4>
            <h4> {resData.data.costForTwo / 100}</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    );
};

const resObj = {
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "229",
"name": "Meghana Foods",
"city": "1",
"slugs": {
"restaurant": "meghana-foods-5th-block-koramangala",
"city": "bangalore"
},
"cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
"address": "124, 1st A Cross Rd, Near Jyoti Nivas College Road, Khb Colony, 5Th Block, Koramangala, Bengaluru, Karnataka 560095",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "50000",
"costForTwoMessage": "₹500 FOR TWO",
"cuisines": [
"Biryani",
"Andhra",
"South Indian",
"Chinese",
"Seafood"
],
"avgRating": 4.6,
"feeDetails": {},
"parentId": "635",
"avgRatingString": "4.6",
"totalRatingsString": "194K+",
"promoted": true,
"adTrackingId": "cid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01~p=0~adgrpid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~plpr=SEARCH#RESTAURANT~st=meghana~eid=88a53435-d001-4a5b-bee7-5a639034f172~srvts=1766674416131",
"sla": {
"deliveryTime": 18,
"minDeliveryTime": 15,
"maxDeliveryTime": 20,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "15-20 MINS",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"aggregatedDiscountInfoV2": {
"visible": true
},
"ratingSlab": "RATING_SLAB_5",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "21K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"campaignId": "7755cb3e-edc4-4923-ab24-d4b8b3bf8c01",
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\",\"adTrackingId\":\"cid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01~p=0~adgrpid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~plpr=SEARCH#RESTAURANT~st=meghana~eid=88a53435-d001-4a5b-bee7-5a639034f172~srvts=1766674416131\"}",
"objectValue": "229",
"impressionObjectName": "impression-restaurant-ad",
"clickObjectName": "click-restaurant-ad"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "229"
}
}
}
}
};



const Body =() => {
    return (
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
        <RestaurantCard
        resData={resObj}
        />
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
     </div>
   </div>)
}

const Footer = () => {
    return(
        <div className="footer">
            <div>Footer</div>
        </div>
    )
}
const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    )
}
        

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);