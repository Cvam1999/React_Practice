import { useSelector } from "react-redux";
import ItemList from "./ItemLists";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10 p-10 bg-gray-100 rounded-lg">
      <h1 className="font-bold text-2xl m-3">Cart</h1>
      <div className="m-auto w-6/12">
        {cartItems.length === 0 ? (
          " "
        ) : (
          <button
            className="p-2 m-2 font-bold bg-black text-white rounded-sm cursor-pointer hover:bg-gray-500"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 ? (
          <div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              }
              className="w-5/12 h-1/5 rounded-2xl m-auto"
            />
            <h2 className="font-bold text-2xl m-6">Your cart is empty</h2>
            <p>You can go to <Link to="/" className="text-emerald-600">Home</Link> page to view more restaurants </p>
          </div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
