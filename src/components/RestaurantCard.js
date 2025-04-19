import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  return (
    <div className="m-4 p-4 background-color hover:bg-orange-200 w-60 h-135 rounded-md cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-xl py-3">{name}</h2>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <p>{costForTwo}</p>
      <p>{sla.deliveryTime} Mins</p>
    </div>
  );
};

export default RestaurantCard;
