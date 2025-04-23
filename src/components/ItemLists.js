import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 bg-gray-100 shadow-lg rounded-lg border-b-2 justify-between flex"
        >
          <div>
            <div className="py-2">
              <span className="font-bold text-lg">
                {item?.card?.info?.name}
              </span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="flex flex-col justify-center absolute ">
          <button className="bg-white text-md text-emerald-700 p-0.5 shadow-lg rounded-md mx-155 my-15 justify-between">ADD</button>
            
          </div>
          <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-30 rounded-2xl"
            />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
