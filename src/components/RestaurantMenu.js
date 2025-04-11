import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
        console.log("useEffect called");
    },[]);
    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }
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
