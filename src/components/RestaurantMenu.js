import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';
import userRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    
    const { resId } = useParams();
    const resInfo = userRestaurantMenu(resId);
    if(resInfo === null) return <Shimmer />;
    const menu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
  return (
    <div>

      <h1>{resInfo.data.cards[2]?.card?.card?.info.name}</h1>
      <p>{resInfo.data.cards[2]?.card?.card?.info.city}</p>
      <h1>Menu</h1>
      <ul>
        {menu?.map((item,index) => (
            <li key={index}>{item.title} -{"Rs."} {item?.dish?.info?.price/100}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
