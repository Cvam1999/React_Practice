import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  },[]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9734855&lng=77.7149827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>Looks like you are offline</h1>
      </div>
    );
  }

  //conditional rendering
  //if(list.length === 0) return <Shimmer />;
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-2 m-2">
          <input
            type="text"
            placeholder="Search"
            className="search-box border border-black rounded-lg p-1 m-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-2 py-1 rounded-1xl cursor-pointer bg-orange-200 hover:bg-orange-300"
            onClick={() => {
              const filterRes = list.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase().trim())
              );
              setFilterList(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-2 h-9 my-5 rounded-2xl hover:bg-orange-300 cursor-pointer bg-orange-200 m-2"
          onClick={() => {
            const TopRatedRes = list.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilterList(TopRatedRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filterList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
