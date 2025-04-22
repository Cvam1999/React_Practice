const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="justify-between p-2 m-2 bg-orange-100 shadow-lg rounded-lg border-b-2">
            <div className="py-2">
            <span className="font-bold text-lg">{item.card.info.name}</span>
            <span> -  ₹ {item?.card?.info?.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
