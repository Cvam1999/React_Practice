import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, avgRating, cuisines, areaName, costForTwo, cloudinaryImageId} = resData?.info;
      return (
          <div className='res-card'>
          <img className='res-logo' alt='res-logo' src={ CDN_URL + cloudinaryImageId} />
          <h2>{name}</h2>
          <p>{avgRating}</p>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
          <p>{costForTwo}</p>
          </div>
      );
  }

export default RestaurantCard;