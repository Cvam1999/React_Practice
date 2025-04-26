import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = userRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const menu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.carousel;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories)

  return (
    <div>
      <h1 className="font-bold text-2xl justify-center flex m-auto">
        {resInfo.data.cards[2]?.card?.card?.info.name}
      </h1>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <h1>Menu</h1>
      <ul>
        {menu?.map((item,index) => (
            <li key={index}>{item.title} -{"Rs."} {item?.dish?.info?.price/100}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
