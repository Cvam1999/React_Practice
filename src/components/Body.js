import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let list1 = [
        {
            "info": {
                "id": "722329",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/748cffba-b629-4996-9889-16912fe6e737_722329.jpg",
                "locality": "Hoodi",
                "areaName": "Marathahalli",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.3,
                },
        },
        {
            "info": {
                "id": "722330",
                "name": "Kapoor's Kitchen",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/748cffba-b629-4996-9889-16912fe6e737_722329.jpg",
                "locality": "Hoodi",
                "areaName": "Marathahalli",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.1,
                },
        },
        {
            "info": {
                "id": "722331",
                "name": "Asha tifin",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/748cffba-b629-4996-9889-16912fe6e737_722329.jpg",
                "locality": "Hoodi",
                "areaName": "Marathahalli",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 3.3,
                },
        }
    ]
    const [list, setList] = useState(resList);     
    return (
      <div className='body'>
        <div className='filter'>
            <button className='filter-btn' onClick={()=>{
                 const filterList = list.filter(res => res?.info?.avgRating > 4.0);
                 setList(filterList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info?.id} resData={restaurant} />
        ))}
        
        
      </div>
      </div>
    );
  }

export default Body;